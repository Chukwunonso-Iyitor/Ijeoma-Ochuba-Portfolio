import Head from "next/head";
import styled from "@emotion/styled";
import Link from "next/link";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

import { SliceZone } from "@prismicio/react";

import { createClient } from "../prismicio";
import { components } from "../slices";
import * as prismic from '@prismicio/client'
import sm from '../sm.json'

export default function About({page}) {
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
            {/* <p
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sed velit turpis. Nam a efficitur lorem, ac venenatis
              nunc. Nunc rutrum non tortor at egestas. Pellentesque tincidunt
              porta ante, vel rhoncus lectus aliquam ut. Etiam venenatis urna
              nec enim mattis, in commodo ipsum porta. Sed porta lacinia velit,
              ac mattis elit efficitur in. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Morbi
              ultrices velit in enim vehicula, ac placerat magna sodales.
              Vestibulum faucibus lacus diam, ac laoreet tellus mollis quis.
              Phasellus finibus egestas semper. <br /> Integer tempor, ipsum
              quis tempor molestie, urna est consequat lacus, et tincidunt elit
              diam feugiat mauris. Aenean ut tellus convallis, lobortis enim in,
              ultrices dolor. Vestibulum ut lectus eget orci condimentum euismod
              quis eu nisl. Sed sem urna, interdum nec blandit non, elementum
              vitae ex. Ut maximus venenatis nibh, eget sodales justo feugiat
              vel. Donec vel lorem urna. Etiam a massa at risus imperdiet
              commodo. Pellentesque tempor, libero pellentesque porttitor
              interdum, erat nisi facilisis augue, eget tincidunt arcu quam et
              purus. <br /> Cras iaculis volutpat accumsan. Etiam ullamcorper,
              augue at rutrum tristique, tortor enim euismod neque, eget luctus
              diam quam in felis. Curabitur pellentesque fringilla egestas.
              Vivamus sed mi eget diam porttitor ullamcorper in in ante. Aenean
              bibendum nisl euismod, interdum tellus eu, aliquet tortor. Vivamus
              et ipsum eros. Morbi fringilla arcu arcu, eget finibus ex
              tincidunt ac. In non molestie sapien. Integer lobortis, ante eget
              volutpat consequat, leo massa auctor tortor, sit amet viverra
              lorem nisl ac magna. Pellentesque tristique arcu at quam pretium
              imperdiet. Nulla in dignissim purus. Duis elit metus, fermentum
              quis varius sed, efficitur eget est. Nam tincidunt lorem in quam
              condimentum iaculis. Curabitur tincidunt urna elit, elementum
              malesuada orci tincidunt quis. In mollis nisi libero, vitae auctor
              dui porta vel. Ut eu risus congue, mollis nisi eget, viverra leo.
              Vestibulum sed arcu in ante posuere efficitur. Cras placerat
              imperdiet leo, in accumsan justo pharetra a. <br /> Vestibulum in
              justo sit amet nisl molestie commodo vitae at risus. Nullam diam
              lectus, sodales nec varius in, tristique vel sapien. Morbi non
              diam at purus lobortis malesuada. Aliquam quam erat, auctor vitae
              nibh sed, interdum sodales massa. Mauris pulvinar eleifend lectus,
              et suscipit tortor commodo quis. Maecenas tempor tempor purus ut
              consectetur. Integer quis massa orci. Pellentesque tristique non
              lacus id volutpat. Duis a dictum justo. Nunc eget leo eget nisi
              interdum dapibus suscipit nec quam. Donec a congue dolor. Duis
              augue ex, lacinia ut porta vitae, lobortis et magna. Quisque sed
              fringilla diam. Quisque neque massa, maximus eget tincidunt ac,
              ultrices non eros. Aliquam a nisi lobortis, consectetur erat
              consequat, pulvinar nibh. Suspendisse imperdiet augue quis felis
              lacinia tincidunt. Quisque nec enim ac velit mattis finibus eu nec
              risus. Fusce enim leo, euismod ac arcu sit amet, ultricies laoreet
              ante. Praesent ac ligula sed metus varius convallis. Ut orci
              metus, egestas in felis eget, facilisis sagittis metus. Fusce eget
              posuere lacus, sit amet tristique ligula. Proin auctor velit
              lectus, ut placerat quam congue quis. Cras sollicitudin turpis vel
              tortor venenatis aliquam. Cras eros augue, dapibus quis erat
              vulputate, bibendum efficitur ligula. Integer elit diam, interdum
              sit amet commodo mattis, faucibus id ante. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Donec vitae tellus et
              felis faucibus tincidunt vitae at elit. Sed dictum venenatis
              tellus, vel consectetur dui. Nulla convallis maximus sapien, sed
              auctor magna venenatis vel. Aliquam mollis urna sit amet nunc
              suscipit, id imperdiet nibh facilisis.
            </p> */}
            {/* <SliceZone slices={page.data.slices} components={components} /> */}
            <pre>{JSON.stringify(page, null, 2)}</pre>
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

export const getStaticProps = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  const page = await client.getSingle('about')

  return {
    props: {
      page,
    },
  };
};
