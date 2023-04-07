import Head from "next/head";
import Layout from "../../components/Layout";
import styled from "@emotion/styled";
import Link from "next/link";
import BlogCard from "../../components/BlogCard";
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
  .excerpt {
    font-weight: 400;
    p {
      font-size: 20px;
    }
  }
  h6 {
    .divider {
      height: 1px;
      width: 40px;
      border-radius: 6px;
      vertical-align: middle;
    }
  }
  .cover-img {
    background-size: cover;
    height: 460px;
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

        <Banner>
          <Container className="py-5">
            <div className="text-center">
              <h6 className="text-grey">
                <span
                  className="link-orange"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(
                      "/blog/category",
                      `/blog/category?q=${blog.data.category}`
                    );
                  }}
                >
                  {blog.data.category}
                </span>
                <span className="divider bg-black d-inline-block mx-3"></span>
                <span>
                  {month}{" "}
                  {prismicH.asDate(blog.first_publication_date).getDate()},{" "}
                  {prismicH.asDate(blog.first_publication_date).getFullYear()}
                </span>
              </h6>
              <h1 className="h1 mt-3 mb-4">{blog.data.title}</h1>
              <div className="text-grey excerpt">
                <PrismicRichText field={blog.data.excerpt} />
              </div>
            </div>
            <div className="mt-5 px-xl-5 mx-xl-5">
              <div
                className="cover-img rounded-5"
                style={{
                  backgroundImage: `url('${blog.data.cover_image.url}')`,
                }}
              ></div>
            </div>
          </Container>
        </Banner>

        {/* Article content  */}
        <section id="blog-article" className="container row mx-auto">
          <Content className="col pt-5">
            <SliceZone slices={blog.data.slices} components={components} />
          </Content>
        </section>

        {/* Related Content  */}
        <section className="pb-5">
          <Container>
            <div className="px-xl-5 mx-xl-5">
              <div className="px-3">
                <hr />
                <h4 className="text-grey text-uppercase my-5 h4">
                  Related Posts:
                </h4>
              </div>

              <div className="row row-cols-1 row-cols-lg-2 mt-4">
                {related.map((blog) => (
                  <div
                    className="col pb-4 ps-4 pe-4 pe-lg-5"
                    key={blog.data.title}
                  >
                    <BlogCard
                      title={blog.data.title}
                      slug={blog.uid}
                      published={blog.first_publication_date}
                      image={blog.data.cover_image.url}
                      category={blog.data.category}
                      duration={blog.data.read_duration}
                    />
                  </div>
                ))}
              </div>

              {/* CTA  */}
              <div className="mt-3 d-flex justify-content-center">
                <Link href={`/contact`} className="btn-orange">
                  Contact me <i className="bi bi-hand-thumbs-up-fill ms-1"></i>
                </Link>
              </div>
            </div>
          </Container>
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
