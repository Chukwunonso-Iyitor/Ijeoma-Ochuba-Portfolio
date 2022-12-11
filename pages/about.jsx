import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";


export default function About() {
  return (
    <>
      <Head>
        <title>Portfolio | About</title>
      </Head>
      <Layout>
        <div className="container py-5">
        <h1 className="text-center">About</h1>
        </div>
      </Layout>
    </>
  );
}
