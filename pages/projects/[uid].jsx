import Head from "next/head";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import Link from "next/link";
import RelatedCaseStudyCard from "../../components/RelatedCaseStudyCard";
import { useRouter } from "next/router";
import { PrismicNextImage } from "@prismicio/next";
import { Container, Row, Col } from "react-bootstrap";

import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { PrismicRichText } from "@prismicio/react";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

const Content = styled.article`
  img {
    max-width: 100%;
  }
  iframe {
    width: 100%;
    min-height: 80vh;
  }
`;
const TopBar = styled.section`
  .back-btn {
    cursor: pointer;
    i {
      position: relative;
      left: 0px;
      transition: left 0.4s ease;
    }
    &:hover {
      i {
        left: -4px;
      }
    }
  }
  .project-info {
    h6 {
      font-weight: 600;
      font-size: 16px;
    }
  }
`;
const Banner = styled.section`
  background-size: cover;
  .content {
    min-height: 380px;
    .featured-img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  } 
`;

export default function Article({ article, settings, related }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`Portfolio | Projects | ${article.data.title}`}</title>
      </Head>
      <Layout settings={settings}>
        <Banner
          className="bg-grey"
          style={{
            backgroundColor: article.data.cover_color,
          }}
        >
          <Container>
            <Row className="content align-items-center text-white">
              <Col xs={12} lg={6} xl={7}>
                <h1 className="h1 mb-3 mt-5 mt-lg-0">{article.data.title}</h1>
                <span className="category-tags">
                  <ul>
                    {article.data.category.map((tag, index) => (
                      <li key={index}>{tag.text}</li>
                    ))}
                  </ul>
                </span>
              </Col>
              <Col>
                <PrismicNextImage
                  field={article.data.featured_image}
                  className="featured-img d-block mx-auto"
                />
              </Col>
            </Row>
          </Container>
        </Banner>

        {/* Top Panel  */}
        <TopBar className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-2 mb-5">
                {/* Back button  */}
                <span
                  className="text-grey link-orange back-btn"
                  onClick={() => router.back()}
                >
                  <i className="bi bi-arrow-left me-1"></i>Back
                </span>
              </div>

              <div className="col-12 col-sm project-info">
                {article.data.role.length > 0 && (
                  <>
                    <h6 className="text-darkorange">ROLE</h6>
                    <div className="text-grey">
                      <PrismicRichText field={article.data.role} />
                    </div>
                  </>
                )}

                {article.data.deliverables != null && (
                  <>
                    <h6 className="text-darkorange">TEAM</h6>
                    <p className="text-grey">{article.data.deliverables}</p>
                  </>
                )}
              </div>

              <div className="col-12 col-sm ps-lg-5 project-info">
                {article.data.project_duration != null && (
                  <>
                    <h6 className="text-darkorange">PROJECT DURATION</h6>
                    <p className="text-grey">{article.data.project_duration}</p>
                  </>
                )}

                {article.data.design_tools != null && (
                  <>
                    <h6 className="text-darkorange">TOOLS</h6>
                    <p className="text-grey">{article.data.design_tools}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </TopBar>

        <div className="container px-3">
          <hr />
        </div>

        <section className="container row mx-auto">
          {/* Article content  */}
          <Content className="col pt-5">
            <SliceZone slices={article.data.slices} components={components} />
          </Content>
        </section>

        <section className="py-5 bg-lightgrey">
          <div className="container">
            {/* <hr /> */}
            <div className="row justify-content-lg-end">
              <div className="col-12">
                <h5 className="text-grey text-uppercase ">
                  See more of my work:
                </h5>

                {/* Related Content  */}

                <div className="row row-cols-1 row-cols-lg-2 mt-4 mb-3">
                  {related.map((article) => (
                    <div
                      className="col pb-4 ps-4 pe-4 pe-lg-5"
                      key={article.data.title}
                    >
                      <RelatedCaseStudyCard
                        title={article.data.title}
                        slug={article.uid}
                        image={article.data.featured_image.url}
                        color={article.data.cover_color}
                      />
                    </div>
                  ))}
                </div>

                {/* CTA  */}
                <div className="mt-5 d-flex justify-content-center">
                  <Link href={`/contact`} className="btn-orange">
                    Contact me{" "}
                    <i className="bi bi-hand-thumbs-up-fill ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <pre>{JSON.stringify(article, null, 2)}</pre> */}
      </Layout>
    </>
  );
}

// Fetch content from prismic
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
  const settings = await client.getSingle("settings");

  const articles = await client.getAllByType("article");
  const filtered = articles.filter((e) => e.uid !== article.uid);
  const shuffled = filtered.sort((a, b) => 0.5 - Math.random());
  const related = shuffled.slice(0, 4);
  return {
    props: { article, settings, related },
  };
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient();
  const articles = await client.getAllByType("article");

  return {
    paths: articles.map((article) => prismicH.asLink(article)),
    fallback: false,
  };
}
