import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const RelatedCard = styled.div`
  height: 100px;
  transition: 0.6s ease;
  .featured-img {
    background-size: 120%;
    background-position: center center;
    transition: inherit;
  }
  h6 {
    i {
      opacity: 0;
      transition: 0.4s ease;
    }
  }
  &:hover {
    .featured-img {
      background-size: 150%;
    }
    h6 {
      i {
        opacity: 1;
      }
    }
  }
`;

const RelatedCaseStudyCard = ({ title, image, slug }) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className=" text-decoration-none"
      onMouseEnter={() =>
        (document.documentElement.style.scrollBehavior = "auto")
      }
    >
      <RelatedCard className="row">
        <div
          className="col-4 py-4 featured-img"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        ></div>
        <div className="col bg-white d-flex align-items-center px-4">
          <h6 className="text-black mb-0">
            {title} <i className="bi bi-arrow-right ms-2"></i>
          </h6>
        </div>
      </RelatedCard>
    </Link>
  );
};

export default RelatedCaseStudyCard;
