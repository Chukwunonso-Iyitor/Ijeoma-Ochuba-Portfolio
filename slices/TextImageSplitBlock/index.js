/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.TextImageSplitBlockSlice} TextImageSplitBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextImageSplitBlockSlice>} TextImageSplitBlockProps
 * @param { TextImageSplitBlockProps }
 */


const openLightbox = (e) => {
  let src = e.target.getAttribute("src");
  // console.log(src);
  const lbox = document.getElementById("lightbox");
  const wrapper = document.querySelector(".img-wrapper");
  const limg = document.getElementById("lightbox-img");

  lbox.style.cssText = "visibility: visible; opacity: 1";
  wrapper.style.cssText = "scale: 1;";
  limg.setAttribute("src", src);
};
const closeLightbox = () => {
  const lbox = document.getElementById("lightbox");
  const wrapper = document.querySelector(".img-wrapper");
  const limg = document.getElementById("lightbox-img");
  lbox.style.cssText = "visibility: hidden; opacity: 0; cursor: auto;";
  wrapper.style.cssText = "scale: .2;";
  limg.setAttribute("src", '');
};

const TextImageSplitBlock = ({ slice }) => (
  <section className="row pb-5 align-items-center">
    <span className="col-12 col-sm title">
      {slice.primary.text ? (
        <PrismicRichText field={slice.primary.text} />
      ) : (
        <h2>{""}</h2>
      )}
    </span>
    {slice.primary.image && (
      <div className="col ps-lg-5 ms-lg-5">
        <PrismicNextImage
          field={slice.primary.image}
          className="img-fluid d-block mx-auto"
          onClick={openLightbox}
          style={{ cursor: "zoom-in" }}
        />

        {slice.primary.image_label != null && (
          <p className="text-center mt-3">{slice.primary.image_label}</p>
        )}

        <div
          id="lightbox"
          className="d-flex justify-content-center align-items-center"
          onClick={closeLightbox}
        >
          <div className="img-wrapper">
            <img src="" alt="" id="lightbox-img" className="d-block" />
          </div>
        </div>
      </div>
    )}
  </section>
);

export default TextImageSplitBlock;
