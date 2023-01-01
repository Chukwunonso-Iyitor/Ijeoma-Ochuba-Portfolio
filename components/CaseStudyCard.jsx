import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Card = styled.div`
  height: 520px;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 0.4s ease;
  cursor: pointer;
  &:hover {
    scale: 1.01;
    .overlay {
      backdrop-filter: brightness(0.6) saturate(1);
      h5 {
        i {
          opacity: 1;
        }
      }
    }
  }
  .overlay {
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(0.4) saturate(0.6);
    transition: inherit;
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
    h5 {
      i {
        opacity: 0;
        transition: 0.4s ease;
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
