import Head from "next/head";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import Link from "next/link";

import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";
import { PrismicRichText } from "@prismicio/react";

const Content = styled.article`
  img {
    max-width: 100%;
  }
  iframe {
    min-height: 1200px;
  }
`;
const SideBar = styled.aside`
  .side-bar {
    position: sticky;
    top: 100px;
    z-index: 60;
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

export default function Article({ article, settings }) {
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
          <SideBar className="col-3">
            <div className="side-bar">
              <Link href="/#case-studies" className="text-grey link-orange">
                <i className="bi bi-arrow-left me-2"></i>Back
              </Link>
            </div>
          </SideBar>

          {/* Article content  */}
          <Content className="col">
            <PrismicRichText field={article.data.content} />
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{
                __html: article.data.embed.html,
              }}
            />
          </Content>
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

  return {
    props: { article, settings },
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
