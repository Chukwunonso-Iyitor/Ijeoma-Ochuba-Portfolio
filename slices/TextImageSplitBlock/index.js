import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.TextImageSplitBlockSlice} TextImageSplitBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextImageSplitBlockSlice>} TextImageSplitBlockProps
 * @param { TextImageSplitBlockProps }
 */
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
        />

        {slice.primary.image_label != null && (
          <p className="text-center">{slice.primary.image_label}</p>
        )}
      </div>
    )}
    <style jsx>{`
      /* section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        } */
    `}</style>
  </section>
);

export default TextImageSplitBlock;
