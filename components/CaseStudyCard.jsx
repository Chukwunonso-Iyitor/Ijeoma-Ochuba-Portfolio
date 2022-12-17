import React from "react";
import styled from "@emotion/styled";

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
          &:first-child {
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
  }
`;

const CaseStudyCard = (props) => {
  return (
    <Card
      className=" text-white"
      style={{
        backgroundImage:
          "url(https://images.ctfassets.net/kqtp79bt539w/1Vh1YBpVWnCz5dhJjvpYci/e1649a60554f12974cd1451c4df9e2b2/ux-design.webp)",
      }}
    >
      <div className="overlay p-5 d-flex flex-column justify-content-between">
        <div>
          <h3 className="h3 ">Sample Case Study Title</h3>
          <span className="category-tags">
            <ul>
              <li>Product Design</li>
              <li>B2B</li>
              <li>Transportation</li>
            </ul>
          </span>
        </div>
        <div>
          <h5>Read Case Study</h5>
        </div>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
