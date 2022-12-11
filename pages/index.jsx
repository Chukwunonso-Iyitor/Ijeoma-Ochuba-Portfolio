import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Ijeoma Ochuba</title>
      </Head>
      <Layout>
        <div className="container py-5">
          <h1 className="text-center">Home</h1>
        </div>
      </Layout>
    </>
  );
}
