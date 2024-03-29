import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

const Card = styled.div`
  .img-layer {
    height: 420px;
    position: relative;
    background-position: center center;
    background-size: 90%;
    background-repeat: no-repeat;

    .layer-overlay {
      background-color: #ffffffdd;
      backdrop-filter: blur(6px);
      width: 0%;
      height: 100%;
      transition: 0.4s ease;
      .overlay-text {
        border-width: 1px;
        border-style: solid;
        position: relative;
        visibility: hidden;
        opacity: 0;
        bottom: -20px;
        transition: none;
      }
    }
  }
  h3 {
    font-size: 26px;
  }
  .category-tags {
    font-weight: 600;
    letter-spacing: 0.3px;
    ul {
      padding-left: 0px;
      li {
        display: inline-block;
        list-style-type: none;
        margin-left: 0.5rem;
        &:first-of-type {
          margin-left: 0rem;
          &::before {
            content: "";
          }
        }
        &::before {
          content: "- ";
          margin-right: 0.25rem;
        }
      }
    }
  }
  .excerpt {
    font-size: 14px;
    max-height: 42px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &:hover {
    .img-layer {
      .layer-overlay {
        width: 100%;
        .overlay-text {
          visibility: visible;
          opacity: 1;
          bottom: 0;
          transition: 0.3s ease-out 0.5s;
        }
      }
    }
  }
`;
const CaseStudyCard = ({ title, image, slug, color, tags, excerpt }) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="text-decoration-none"
      onMouseEnter={() =>
        (document.documentElement.style.scrollBehavior = "auto")
      }
    >
      <Card>
        <div
          className="img-layer"
          style={{
            backgroundImage: `url('${image.url}')`,
            backgroundColor: color,
          }}
        >
          <div className="layer-overlay d-flex justify-content-center align-items-center">
            <h6 className="overlay-text text-grey border-grey rounded-pill py-3 px-4">
              View Project
            </h6>
          </div>
        </div>
        <div className="text-black mt-4">
          <h3 className="h3">{title}</h3>
          <span className="category-tags text-darkorange">
            <ul className="mb-1">
              {tags.map((tag, index) => (
                <li key={index}>{tag.text}</li>
              ))}
            </ul>
          </span>
          <p className="excerpt">{excerpt}</p>
        </div>
        <hr className="text-grey mb-3" />
      </Card>
    </Link>
  );
};

export default CaseStudyCard;
