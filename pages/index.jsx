import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import CaseStudyCard from "../components/CaseStudyCard";
import SectionTitle from "../components/SectionTitle";

import { createClient } from "../prismicio";
import { PrismicRichText } from "@prismicio/react";

const CaseStudiesWrapper = styled.section`
  &#case-studies {
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
    }
  }
`;

export default function Home({ home, settings, articles }) {
  return (
    <>
      <Head>
        <title>Portfolio | Ijeoma Ochuba</title>
      </Head>
      <Layout settings={settings}>
        <HeroBanner home={home} />
        <CaseStudiesWrapper id="case-studies" className="pb-5">
          <div className="container">
            <SectionTitle title="Case Studies"></SectionTitle>
            <div className="mt-5 text-center">
              <PrismicRichText field={home.data.case_study_intro} />
            </div>

            {/* Case study cards */}
            <div className="cards-wrapper row row-cols-1 row-cols-lg-2 my-sm-5 col-xl-10 mx-auto">
              {articles.map((article) => (
                <div className="col px-sm-4" key={article.data.title}>
                  <CaseStudyCard
                    title={article.data.title}
                    slug={article.uid}
                    image={article.data.featured_image.url}
                    tags={article.data.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </CaseStudiesWrapper>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const home = await client.getSingle("homepage");
  const settings = await client.getSingle("settings");
  const articles = await client.getAllByType("article");

  return {
    props: {
      home,
      settings,
      articles,
    },
  };
};
