import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <>
      <Head>
        <title>Portfolio | About</title>
      </Head>
      <Layout>
        <section className="container py-5">
          <SectionTitle title="About"></SectionTitle>
        </section>
      </Layout>
    </>
  );
}
