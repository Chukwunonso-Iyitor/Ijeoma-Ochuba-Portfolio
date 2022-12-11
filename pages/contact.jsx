import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";


export default function Contact() {
  return (
    <>
      <Head>
        <title>Portfolio | Contact</title>
      </Head>
      <Layout>
      <div className="container py-5">
        <h1 className="text-center">Contact</h1>
        </div>
      </Layout>
    </>
  );
}
