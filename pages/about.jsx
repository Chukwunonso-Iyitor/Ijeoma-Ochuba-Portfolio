import Head from "next/head";
import styled from "@emotion/styled";
import Link from "next/link";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

export default function About() {
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
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              I love creating digital solutions to simplify people&apos;s
              everyday lives and help them achieve their goals.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
              minus harum voluptatibus voluptates natus vitae earum qui placeat
              sed alias adipisci laboriosam culpa dolore cupiditate ipsam est
              totam, optio rerum. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ut corrupti iste obcaecati ipsam saepe,
              laudantium dolores numquam repudiandae hic nemo quas reiciendis,
              expedita reprehenderit ratione deleniti doloremque perspiciatis
              veritatis omnis!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              iusto soluta unde, eius minima ipsam harum. Veritatis voluptatibus
              iste at impedit amet consectetur. Assumenda dignissimos quaerat
              non, eum harum animi. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Dolorum cumque repudiandae fuga debitis quisquam
              ducimus ipsum, hic, reiciendis esse praesentium reprehenderit sed
              voluptate quidem recusandae aperiam maxime ullam mollitia!
              Aliquam.
            </p>
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
        </section>
      </Layout>
    </>
  );
}
