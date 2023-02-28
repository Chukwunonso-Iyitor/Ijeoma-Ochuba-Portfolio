import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Card = styled.div`
  .img-layer {
    height: 420px;
    background-size: cover;
    background-color: lightgrey;
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
    font-size: 22px;
  }
  .category-tags {
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
const CaseStudyCard = ({ title, image, slug, tags }) => {
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
            backgroundImage: `url('${image}')`,
          }}
        >
          <div className="layer-overlay d-flex justify-content-center align-items-center">
            <h6 className="overlay-text text-grey border-grey rounded-pill py-3 px-4">View Work</h6>
          </div>
        </div>
        <div className="text-black mt-4">
          <h3 className="h3">{title}</h3>
          <span className="category-tags">
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>{tag.text}</li>
              ))}
            </ul>
          </span>
        </div>
        <hr className="text-grey" />
      </Card>
    </Link>
  );
};

export default CaseStudyCard;
