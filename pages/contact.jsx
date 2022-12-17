import Head from "next/head";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";

import { createClient } from "../prismicio";

export default function Contact({ settings }) {
  return (
    <>
      <Head>
        <title>Portfolio | Contact</title>
      </Head>
      <Layout settings={settings}>
        <section className="container py-5">
          <SectionTitle title="Contact"></SectionTitle>
          <div className="col-11 col-lg-10 col-xl-9 my-5 mx-auto ">
            <h1 className="h1 mb-5">
              Let&apos;s create <br /> something great <br /> together!
            </h1>
            <p>
              Thanks for taking the time to look over my portfolio.{" "}
              <a
               href={`mailto: ${settings.data.email} `}
                className="link-orange text-orange"
              >
                Drop me a message
              </a>{" "}
              or fill out the form below and I’ll get back to you shortly.
            </p>
            <div className="mt-5">
              <ContactForm />
            </div>
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
