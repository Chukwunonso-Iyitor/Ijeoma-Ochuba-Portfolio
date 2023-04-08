import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const RelatedCard = styled.div`
  border-radius: 6px;
  overflow: hidden;
  height: 180px;
  transition: 0.6s ease;
  .featured-img {
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
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
      background-size: 105%;
    }
    h6 {
      i {
        opacity: 1;
      }
    }
  }
`;

const RelatedCaseStudyCard = ({ title, image, slug, color }) => {
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
          className="col-5 py-4 featured-img bg-lightgrey"
          style={{
            backgroundImage: `url('${image}')`,
            backgroundColor: color,
          }}
        ></div>
        <div className="col d-flex align-items-center px-4 bg-white">
          <h6 className="text-black mb-0">
            {title} <i className="bi bi-arrow-right ms-2"></i>
          </h6>
        </div>
      </RelatedCard>
    </Link>
  );
};

export default RelatedCaseStudyCard;
