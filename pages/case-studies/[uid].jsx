import Head from "next/head";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import Link from "next/link";
import RelatedCaseStudyCard from "../../components/RelatedCaseStudyCard";
import { useRouter } from "next/router";

import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { PrismicRichText } from "@prismicio/react";

const Content = styled.article`
  img {
    max-width: 100%;
  }
  iframe {
    width: 100%;
    min-height: 80vh;
  }
`;
const SideBar = styled.aside`
  .side-bar {
    position: sticky;
    top: 100px;
    z-index: 60;
    .back-btn {
      cursor: pointer;
    }
    .project-info {
      h6 {
        font-weight: 600;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;
const Banner = styled.section`
  height: 380px;
  background-size: cover;
  .overlay {
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(0.3) saturate(0.6);
    background-image: url("/images/mesh.svg");
    background-size: contain;
    background-repeat: repeat;
    .category-tags {
      ul {
        padding-left: 0px;
        li {
          display: inline-block;
          list-style-type: none;
          margin-left: 0.5rem;
          &:first-of-type {
            margin-left: 0rem;
            &::before {
              content: "";
            }
          }
          &::before {
            content: "- ";
            margin-right: 0.25rem;
          }
        }
      }
    }
  }
`;

export default function Article({ article, settings, related }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{`Portfolio | Case Studies | ${article.data.title}`}</title>
      </Head>
      <Layout settings={settings}>
        <Banner
          className="bg-grey"
          style={{
            backgroundImage: `url('${article.data.featured_image.url}')`,
          }}
        >
          <div className="overlay d-flex justify-content-center align-items-center text-white">
            <div className="text-center">
              <h1 className="h1 mb-5">{article.data.title}</h1>
              <span className="category-tags">
                <ul>
                  {article.data.category.map((tag, index) => (
                    <li key={index}>{tag.text}</li>
                  ))}
                </ul>
              </span>
            </div>
          </div>
        </Banner>
        <section className="container py-5 row mx-auto">
          {/* Side Panel  */}
          <SideBar className="col-12 col-lg-3 mb-5 px-0 p-sm-3">
            <div className="side-bar">
              {/* Back button  */}
              <span
                className="text-grey link-orange back-btn"
                onClick={() => router.back()}
              >
                <i className="bi bi-arrow-left me-2"></i>Back
              </span>

              {/* Aside content  */}
              <div className="mt-5 pe-lg-3 project-info">
                {article.data.role.length > 0 && (
                  <>
                    <h6>ROLE</h6>
                    <div className="text-grey">
                      <PrismicRichText field={article.data.role} />
                    </div>
                  </>
                )}

                {article.data.project_duration != null && (
                  <>
                    <h6>PROJECT DURATION</h6>
                    <p className="text-grey">{article.data.project_duration}</p>
                  </>
                )}

                {article.data.design_tools != null && (
                  <>
                    <h6>DESIGN TOOLS</h6>
                    <p className="text-grey">{article.data.design_tools}</p>
                  </>
                )}
              </div>
            </div>
          </SideBar>

          {/* Article content  */}
          <Content className="col px-0 px-sm-3">
            <PrismicRichText field={article.data.content} />
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{
                __html: article.data.embed.html,
              }}
            />
          </Content>
        </section>

        <section className="py-5 bg-lightgrey">
          <div className="container">
            <div className="row justify-content-lg-end">
              <div className="col-12 col-sm-9">
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
                      />
                    </div>
                  ))}
                </div>

                {/* CTA  */}
                <Link href={`/contact`} className="btn-grey-alt">
                  Hire me
                </Link>
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
