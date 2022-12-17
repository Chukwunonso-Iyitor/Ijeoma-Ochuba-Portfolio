import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import CaseStudyCard from "../components/CaseStudyCard";
import SectionTitle from "../components/SectionTitle";

const CaseStudiesWrapper = styled.section`
  &#case-studies {
    padding-top: 83px;
    .cards-wrapper{
      .col{
        &:nth-child(even){
          margin-top: 3rem;
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Ijeoma Ochuba</title>
      </Head>
      <Layout>
        <HeroBanner></HeroBanner>
        <CaseStudiesWrapper id="case-studies" className="pb-5">
          <div className="container">
            <SectionTitle title="Case Studies"></SectionTitle>
            <p className="mt-5 text-center">
              I have curated several in-depth case studies, from product
              strategy and ideation, to prototyping and user testing.
            </p>

            {/* Case study cards */}
            <div className="cards-wrapper row row-cols-2 my-5">
              <div className="col px-4">
                <CaseStudyCard />
              </div>
              <div className="col px-4">
                <CaseStudyCard />
              </div>
              <div className="col px-4">
                <CaseStudyCard />
              </div>
              <div className="col px-4">
                <CaseStudyCard />
              </div>
            </div>
          </div>
        </CaseStudiesWrapper>
      </Layout>
    </>
  );
}
