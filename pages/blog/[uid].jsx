import Head from "next/head";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import Link from "next/link";
import { Row, Col, Container } from "react-bootstrap";
import { useRouter } from "next/router";

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

const Banner = styled.section`
  position: relative;
  height: 420px;
  overflow-x: hidden;
  background-color: #814c2728;
  .bg-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .cover-img {
      height: 100%;
      background-size: cover;
      clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
  .info-layer {
    min-height: 380px;
  }
`;

export default function Article({ blog, settings, related }) {
  let month = "";
  switch (prismicH.asDate(blog.first_publication_date).getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
  }
  const router = useRouter();
  const toArticle = () => {
    document
      .getElementById("blog-article")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>{`Portfolio | Blog | ${blog.data.title}`}</title>
      </Head>
      <Layout settings={settings}>
        <Banner className="container-fluid">
          <Row className="align-items-center bg-layer">
            <Col></Col>
            <Col
              className="cover-img"
              style={{
                backgroundImage: `url('${blog.data.cover_image.url}')`,
              }}
            ></Col>
          </Row>
          <Container>
            <Row className="align-items-center info-layer">
              <Col>
                <span>
                  {month}{" "}
                  {prismicH.asDate(blog.first_publication_date).getDate()},{" "}
                  {prismicH.asDate(blog.first_publication_date).getFullYear()}
                </span>
                <span className="mx-3">
                  <i className="bi bi-dash-lg"></i>
                </span>
                <span className="d-inline-block">
                  <i className="bi bi-clock-fill me-1"></i>{" "}
                  {blog.data.read_duration}{" "}
                  {blog.data.read_duration > 1 ? "mins" : "min"}
                </span>
                <h1 className="h1 mt-2 mb-4">{blog.data.title}</h1>
                <span className="h4" onClick={toArticle}>
                  <i className="bi bi-arrow-down"></i>
                </span>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Banner>

        <section id="blog-article" className="container row mx-auto">
          {/* Article content  */}
          <Content className="col pt-5">
            <SliceZone slices={blog.data.slices} components={components} />
          </Content>
        </section>

        <section className="py-5 bg-lightbeige">
          <div className="container">
            <div className="row justify-content-lg-end">
              <div className="col-12">
                <h5 className="text-grey text-uppercase ">
                  See more of my work:
                </h5>

                {/* Related Content  */}

                {/* <div className="row row-cols-1 row-cols-lg-2 mt-4 mb-3">
                  {related.map((article) => (
                    <div
                      className="col pb-4 ps-4 pe-4 pe-lg-5"
                      key={article.data.title}
                    >
                      <RelatedCaseStudyCard
                        title={article.data.title}
                        slug={article.uid}
                        image={article.data.featured_image.url}
                      />
                    </div>
                  ))}
                </div> */}

                {/* CTA  */}
                <div className="mt-5 d-flex justify-content-center">
                  <Link href={`/contact`} className="btn-orange">
                    Hire me <i className="bi bi-hand-thumbs-up-fill ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <pre>{JSON.stringify(blog, null, 2)}</pre> */}
      </Layout>
    </>
  );
}

// Fetch content from prismic
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const blog = await client.getByUID("blog", params.uid);
  const settings = await client.getSingle("settings");

  const blogs = await client.getAllByType("blog");
  const filtered = blogs.filter((e) => e.uid !== blog.uid);
  const shuffled = filtered.sort((a, b) => 0.5 - Math.random());
  const related = shuffled.slice(0, 4);
  return {
    props: { blog, settings, related },
  };
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient();
  const blogs = await client.getAllByType("blog");

  return {
    paths: blogs.map((blog) => prismicH.asLink(blog)),
    fallback: false,
  };
}
