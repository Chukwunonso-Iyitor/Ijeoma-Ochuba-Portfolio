import Head from "next/head";
import Layout from "../../components/Layout";
import SectionTitle from "../../components/SectionTitle";

import { createClient } from "../../prismicio";

export default function Blog({ settings }) {
  return (
    <>
      <Head>
        <title>Portfolio | Blog</title>
      </Head>
      <Layout settings={settings}>
        <section className="container py-5">
          <SectionTitle title="Blog"></SectionTitle>
          <div className="col-11 col-lg-10 col-xl-9 my-5 mx-auto ">
            <h1 className="h1 mb-5">
              Fresh Articles on UX Design, User Research and Design Thinking.
            </h1>
            <p>Coming soon</p>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const settings = await client.getSingle("settings");

  return {
    props: {
      settings,
    },
  };
};
