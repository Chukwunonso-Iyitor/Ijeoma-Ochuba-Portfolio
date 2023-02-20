import Head from "next/head";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import Link from "next/link";
import RelatedCaseStudyCard from "../../components/RelatedCaseStudyCard";
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

export default function Article({ blog, settings, related }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`Portfolio | Projects | ${blog.data.title}`}</title>
      </Head>
      <Layout settings={settings}>
        <Banner
          className="bg-grey"
          style={{
            backgroundImage: `url('${blog.data.cover_image.url}')`,
          }}
        >
          <div className="overlay d-flex justify-content-center align-items-center text-white">
            <div className="text-center">
              <h1 className="h1 mb-5">{blog.data.title}</h1>
              <span className="category-tags">
                {/* <ul>
                  {article.data.category.map((tag, index) => (
                    <li key={index}>{tag.text}</li>
                  ))}
                </ul> */}
              </span>
            </div>
          </div>
        </Banner>

      

  
        <section className="container row mx-auto">
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
                  <Link href={`/contact`} className="btn-rainbow">
                    Hire me 👋
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
