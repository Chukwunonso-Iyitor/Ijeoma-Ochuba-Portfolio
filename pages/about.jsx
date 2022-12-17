import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

import * as prismic from "@prismicio/client";
import sm from "../sm.json";
import { PrismicRichText } from "@prismicio/react";

export default function About({ page }) {
  return (
    <>
      <Head>
        <title>Portfolio | About</title>
      </Head>
      <Layout>
        <section className="container py-5">
          <SectionTitle title="About Me"></SectionTitle>
          <div className="col-11 col-lg-10 col-xl-9 my-5 mx-auto ">
            <h1
              className="h1 mb-5"
              data-aos="zoom-out"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              {page.data.introduction}
            </h1>
            <div
              data-aos="zoom-out"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <PrismicRichText field={page.data.biography} />
            </div>

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

          {/* <pre>{JSON.stringify(page, null, 2)}</pre> */}
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getSingle("about");

  return {
    props: {
      page,
    },
  };
};
