import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Card = styled.div`
  height: 420px;

`
const CaseStudyCard = ({ title, image, slug, tags }) => {
  return (
    <Link
      href={`/projects/${slug}`}
      className="text-decoration-none"
      onMouseEnter={() =>
        (document.documentElement.style.scrollBehavior = "auto")
      }
    >
      <Card
        className=" text-white"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="overlay p-4 p-sm-5 d-flex flex-column justify-content-between">
          <div>
            <h3 className="h3 mb-4">{title}</h3>
            <span className="category-tags">
              <ul>
                {tags.map((tag, index) => (
                  <li key={index}>{tag.text}</li>
                ))}
              </ul>
            </span>
          </div>
          <div>
            <h5>
              Read Case Study <i className="bi bi-arrow-right ms-2"></i>
            </h5>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CaseStudyCard;
