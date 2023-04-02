import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import CaseStudyCard from "../components/CaseStudyCard";
import BlogCard from "../components/BlogCard";
import SectionTitle from "../components/SectionTitle";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import { createClient } from "../prismicio";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const CaseStudiesWrapper = styled.section`
  &#projects {
    padding-top: 83px;
    .cards-wrapper {
      .col {
        &:nth-of-type(even) {
          margin-top: 3rem;
        }
      }
      @media (max-width: 768px) {
        .col {
          margin-top: 3rem;
        }
      }
      @media (max-height: 576px) {
        .col {
          margin-top: 3rem;
        }
      }
    }
  }
`;
const Services = styled.div`
  img {
    width: 120px;
    height: 120px;
  }
  p {
    strong {
      font-size: 26px;
    }
  }
`;

export default function Home({ home, settings, articles, blogs }) {
  const myServices = [...home.data.slices].filter((e) => {
    return e.slice_type == "my_services";
  });

  return (
    <>
      <Head>
        <title>Portfolio | Ijeoma Ochuba</title>
      </Head>
      <Layout settings={settings}>
        <HeroBanner home={home} />

        <CaseStudiesWrapper id="projects" className="pb-5">
          <div className="container">
            <SectionTitle
              title="My"
              span="Projects"
              className="text-center"
            ></SectionTitle>
            <div
              className="mt-5 text-center"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <PrismicRichText field={home.data.case_study_intro} />
            </div>

            {/* Case study cards */}
            <div className="cards-wrapper row row-cols-1 row-cols-lg-2 my-sm-5 col-xl-10 mx-auto">
              {articles.map((article) => (
                <div
                  className="col px-sm-4"
                  key={article.data.title}
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  {article.data.display_on_homepage && (
                    <CaseStudyCard
                      title={article.data.title}
                      slug={article.uid}
                      image={article.data.featured_image.url}
                      tags={article.data.category}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-5 d-flex justify-content-center">
              <Link href="/projects" className="btn-orange">
                View all projects <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </CaseStudiesWrapper>

        <section className="py-5 mb-5">
          <Container>
            <SectionTitle
              title="My"
              span="Skills"
              className="text-center"
            ></SectionTitle>
            <Services className="services mt-5">
              <Row>
                {myServices[0].items.map((service, index) => (
                  <Col
                    xs={10}
                    md={4}
                    key={index}
                    className="px-lg-4 px-xl-5 mb-5 mx-auto"
                  >
                    <PrismicNextImage
                      field={service.image}
                      className="mb-4"
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="800"
                      data-aos-delay="100"
                    />
                    <div
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="800"
                      data-aos-delay="100"
                    >
                      <PrismicRichText
                        field={service.title}
                        className="title"
                      />
                      <p>{service.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Services>
            <div className="d-flex justify-content-center">
              <a
                href={settings.data.resume.url}
                target="_blank"
                className="btn-orange"
                rel="noreferrer"
              >
                Browse Resume <i className="bi bi-arrow-up-right ms-1"></i>
              </a>
            </div>
          </Container>
        </section>

        {/* Blogs  */}
        {/* <section className="py-5 ">
          <Container>
            <Row>
              <Col xl={3}>
                <SectionTitle
                  title="Latest"
                  span="Blogs"
                  className="text-center"
                ></SectionTitle>
                <div
                  className="mt-5"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <Link href="/blog" className="btn-arrow px-2">
                    View all
                  </Link>
                </div>
              </Col>
              <Col className="ps-lg-5 mt-5">
                <Row>
                  {blogs.map((blog, index) => (
                    <Col
                      xs={12}
                      md={8}
                      lg={6}
                      className="mb-5"
                      key={index}
                      data-aos="fade-up"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="800"
                      data-aos-delay="100"
                    >
                      {blog.data.display_on_homepage && (
                        <BlogCard
                          title={blog.data.title}
                          slug={blog.uid}
                          published={blog.first_publication_date}
                          image={blog.data.cover_image.url}
                          category={blog.data.category}
                          duration={blog.data.read_duration}
                        />
                      )}
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section> */}

        {/* <pre>{JSON.stringify(home, null, 2)}</pre> */}
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const home = await client.getSingle("homepage");
  const settings = await client.getSingle("settings");
  const articles = await client.getAllByType("article", {
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
  });
  const blogs = await await client.getAllByType("blog");

  return {
    props: {
      home,
      settings,
      articles,
      blogs,
    },
  };
};
