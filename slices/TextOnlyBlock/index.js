import React from "react";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TextOnlyBlockSlice} TextOnlyBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextOnlyBlockSlice>} TextOnlyBlockProps
 * @param { TextOnlyBlockProps }
 */
const TextOnlyBlock = ({ slice }) => (
  <section className="pb-4">
    <span className="title">
      {slice.primary.text ? (
        <PrismicRichText field={slice.primary.text} />
      ) : (
        <h2>{""}</h2>
      )}
    </span>
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

export default TextOnlyBlock;
