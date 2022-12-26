import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import SectionTitle from "../components/SectionTitle";

import { createClient } from "../prismicio";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const PictureWrapper = styled.div`
  img {
    width: 90%;
    height: auto;
    object-fit: cover;
  }
`;

export default function About({ about, settings }) {
  return (
    <>
      <Head>
        <title>Portfolio | About</title>
      </Head>
      <Layout settings={settings}>
        <section className="container py-5">
          <SectionTitle title="About Me"></SectionTitle>
          <div className="col-11 col-lg-10 col-xl-9 my-5 mx-auto">
            <h1 className="h1 mb-5">{about.data.introduction}</h1>

            <div className="row align-items-center">
              {Object.keys(about.data.picture).length != 0 && (
                <PictureWrapper className="col-12 col-sm-5 mb-5 mb-sm-0">
                  <PrismicNextImage
                    field={about.data.picture}
                    className="rounded-circle d-block d-sm-inline mx-auto"
                  />
                </PictureWrapper>
              )}

              <div className="col">
                <PrismicRichText field={about.data.biography} />
              </div>
            </div>
            <div className="mt-5">
              <PrismicRichText field={about.data.additional_information} />
            </div>

            <div className="mt-5 d-flex justify-content-center">
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
