import Head from "next/head";
import Layout from "../../components/Layout";
import SectionTitle from "../../components/SectionTitle";
import CaseStudyCard from "../../components/CaseStudyCard";
import styled from "@emotion/styled";
import Link from "next/link";

import { createClient } from "../../prismicio";

const CaseStudiesWrapper = styled.section`
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
`;

export default function Blog({ settings, articles }) {
  return (
    <>
      <Head>
        <title>Portfolio | Projects</title>
      </Head>
      <Layout settings={settings}>
        <section className="container py-5">
          <SectionTitle
            title="My"
            span="Projects"
            className="text-center"
          ></SectionTitle>

          {/* Case study cards */}
          <CaseStudiesWrapper>
            <div className="cards-wrapper row row-cols-1 row-cols-lg-2 my-sm-5 col-xl-10 mx-auto py-5">
              {articles.map((article) => (
                <div
                  className="col px-sm-4"
                  key={article.data.title}
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <CaseStudyCard
                    title={article.data.title}
                    slug={article.uid}
                    image={article.data.featured_image.url}
                    tags={article.data.category}
                  />
                </div>
              ))}
            </div>
          </CaseStudiesWrapper>
          <div
            className="mt-5 d-flex justify-content-center"
            data-aos="zoom-out"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <Link
              href="/contact"
              className="btn-rainbow me-2 px-4 d-inline-block me-5"
            >
              Hire me 👋
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const articles = await client.getAllByType("article");
  const settings = await client.getSingle("settings");

  return {
    props: {
      articles,
      settings,
    },
  };
};
