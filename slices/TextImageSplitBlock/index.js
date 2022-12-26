import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styled from "@emotion/styled";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.TextImageSplitBlockSlice} TextImageSplitBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextImageSplitBlockSlice>} TextImageSplitBlockProps
 * @param { TextImageSplitBlockProps }
 */

const Lightbox = styled.div`
  &#lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    backdrop-filter: blur(6px) saturate(0) brightness(0.9);
    visibility: hidden;
    opacity: 0;
    cursor: zoom-out; 
    /* transition: .4s ease; */
  }
  .lightbox-img {
    width: 50%;
    height: auto;
  }
`;

const openLightbox = (e) => {
  let src = e.target.getAttribute("src");
  console.log(src);
  const lbox = document.getElementById("lightbox");
  const limg = document.getElementById("lightbox-img");

  lbox.style.cssText = "visibility: visible; opacity: 1";
  limg.setAttribute("src", src);
};
const closeLightbox = () => {
  const lbox = document.getElementById("lightbox");
  lbox.style.cssText = "visibility: hidden; opacity: 0; cursor: auto;";
};
const TextImageSplitBlock = ({ slice }) => (
  <section className="row pb-4 align-items-center">
    <span className="col-12 col-sm title">
      {slice.primary.text ? (
        <PrismicRichText field={slice.primary.text} />
      ) : (
        <h2>{""}</h2>
      )}
    </span>
    {slice.primary.image && (
      <div className="col">
        <PrismicNextImage
          field={slice.primary.image}
          className="img-fluid d-block mx-auto"
          onClick={openLightbox}
          style={{ cursor: "zoom-in" }}
        />

        {slice.primary.image_label != null && (
          <p className="text-center mt-3">{slice.primary.image_label}</p>
        )}

        <Lightbox
          id="lightbox"
          className="d-flex justify-content-center align-items-center"
          onClick={closeLightbox}
        >
          <Image src="" alt="" id="lightbox-img" />
        </Lightbox>
      </div>
    )}
  </section>
);

export default TextImageSplitBlock;
