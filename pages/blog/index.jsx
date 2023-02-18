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
          <SectionTitle
            title="Explore My"
            span="Blog"
            className="text-center"
          ></SectionTitle>
          <div className="col-11 col-lg-10 col-xl-9 my-5 mx-auto ">
            <h3 className="h3 mb-5 text-center">
              Fresh Articles on UX Design, User Research and Design Thinking.
            </h3>
            <p>Coming soon.</p>
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
