import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Ijeoma Ochuba</title>
      </Head>
      <Layout>
       <HeroBanner></HeroBanner>
       <section id="case-studies" className="py-5"></section>
      </Layout>
    </>
  );
}
