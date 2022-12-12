import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";
import SectionTitle from "../components/SectionTitle";

const CaseStudiesWrapper = styled.section`
  &#case-studies {
    padding-top: 83px;
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
            <SectionTitle title="Case Studies" className="col-6"></SectionTitle>
          </div>
        </CaseStudiesWrapper>
      </Layout>
    </>
  );
}
