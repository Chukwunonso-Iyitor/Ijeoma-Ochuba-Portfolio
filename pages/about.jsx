import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

import { createClient } from "../prismicio";
import { PrismicRichText } from "@prismicio/react";

export default function About({ about, settings }) {
  return (
    <>
      <Head>
        <title>Portfolio | About</title>
      </Head>
      <Layout settings={settings}>
        <section className="container py-5">
          <SectionTitle title="About Me"></SectionTitle>
          <div className="col-11 col-lg-10 col-xl-9 my-5 mx-auto ">
            <h1 className="h1 mb-5">{about.data.introduction}</h1>

            <PrismicRichText field={about.data.biography} />

            <div
              className="mt-5 d-flex justify-content-center"
              data-aos="zoom-out"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <Link href="/contact" className="btn-grey">
                Get in touch
              </Link>
            </div>
          </div>

          {/* <pre>{JSON.stringify(about, null, 2)}</pre> */}
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });
  const about = await client.getSingle("about");
  const settings = await client.getSingle("settings");

  return {
    props: {
      about,
      settings,
    },
  };
};
