/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageOnlyBlockSlice} ImageOnlyBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageOnlyBlockSlice>} ImageOnlyBlockProps
 * @param { ImageOnlyBlockProps }
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
  lbox.style.cssText = "visibility: hidden; opacity: 0; cursor: auto;";
  wrapper.style.cssText = "scale: .2;";
};

const ImageOnlyBlock = ({ slice }) => (
  <section className="pb-5">
    <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-4">
      {slice.items.map((item, index) => (
        <div className="col mb-5" key={index}>
          <PrismicNextImage
            field={item.image}
            className="img-fluid d-block mx-auto"
            onClick={openLightbox}
            style={{ cursor: "zoom-in" }}
          />
          {item.label != null && (
            <p className="text-center mt-3">{item.label}</p>
          )}
        </div>
      ))}
    </div>
    <div
      id="lightbox"
      className="d-flex justify-content-center align-items-center"
      onClick={closeLightbox}
    >
      <div className="img-wrapper">
        <img src="" alt="" id="lightbox-img" className="d-block" />
      </div>
    </div>
  </section>
);

export default ImageOnlyBlock;
