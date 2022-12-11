import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";

const Demo = styled.div`
  background-color: teal;
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Ijeoma Ochuba</title>
      </Head>
      <Layout>
      <Demo className="text-white text-center m-5 rounded d-inline-block p-4">Welcome to my UX portfolio</Demo>
      </Layout>
    </>
  );
}
