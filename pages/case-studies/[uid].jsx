import Head from "next/head";
import Layout from "../../components/Layout";

import * as prismicH from "@prismicio/helpers";
import { createClient } from "../../prismicio";

export default function Article({ article, settings }) {
  return (
    <>
      <Head>
        <title>Portfolio | Case Studies | {article.data.title}</title>
        {/* <title>
          {prismicH.asText(article.data.title)}
        </title> */}
      </Head>
      <Layout settings={settings}>
        <h1>Test</h1>
        <pre>{JSON.stringify(article, null, 2)}</pre>
      </Layout>
    </>
  );
}

// Fetch content from prismic
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
  const settings = await client.getSingle("settings");

  return {
    props: { article, settings },
  };
}

// Define Paths
export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return {
    paths: articles.map((article) => prismicH.asLink(article)),
    fallback: false,
  };
}
