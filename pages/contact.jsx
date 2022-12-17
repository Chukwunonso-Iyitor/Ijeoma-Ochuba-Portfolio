import Head from "next/head";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Portfolio | Contact</title>
      </Head>
      <Layout>
        <section className="container py-5">
          <SectionTitle title="Contact"></SectionTitle>
          <div className="col-11 col-lg-10 col-xl-9 my-5 mx-auto ">
            <h1
              className="h1 mb-5"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Let&apos;s create <br /> something great <br /> together!
            </h1>
            <p data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              data-aos-delay="200">
              Thanks for taking the time to look over my portfolio.{" "}
              <a
                href="mailto:ijeochuba@gmail.com"
                className="link-orange text-orange"
              >
                Drop me a message
              </a>{" "}
              or fill out the form below and I’ll get back to you shortly.
            </p>
            <ContactForm />
          </div>
        </section>
      </Layout>
    </>
  );
}
