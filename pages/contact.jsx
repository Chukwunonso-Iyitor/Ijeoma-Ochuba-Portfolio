import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Portfolio | Contact</title>
      </Head>
      <Layout>
        <section className="container py-5">
          <SectionTitle title="Contact"></SectionTitle>
        </section>
      </Layout>
    </>
  );
}
