/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { openLightbox, closeLightbox } from "../../mixins/lightbox";

/**
 * @typedef {import("@prismicio/client").Content.ImageTextSplitBlockSlice} ImageTextSplitBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageTextSplitBlockSlice>} ImageTextSplitBlockProps
 * @param { ImageTextSplitBlockProps }
 */

const ImageTextSplitBlock = ({ slice }) => (
  <section className="row pb-5 align-items-center">
    {slice.primary.image && (
      <div className="col pe-lg-5 me-lg-5">
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
    <span className="col-12 col-sm title">
      {slice.primary.text ? (
        <PrismicRichText field={slice.primary.text} />
      ) : (
        <h2>{""}</h2>
      )}
    </span>
  </section>
);

export default ImageTextSplitBlock;
