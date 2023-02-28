import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import * as prismicH from "@prismicio/helpers";

const Card = styled.div`
  .cover {
    height: 240px;
    background-size: 120%;
    background-position: center center;
    border-radius: 12px;
    transition: 0.4s ease;
  }
  .divider {
    height: 1px;
    width: 40px;
    border-radius: 6px;
    vertical-align: middle;
  }
  .bi-arrow-right {
    position: relative;
    right: 0px;
    font-size: 20px;
    vertical-align: middle;
    transition: 0.4s ease;
  }
  &:hover {
    .cover {
      background-size: 130%;
    }
    .bi-arrow-right {
      right: -10px;
    }
  }
`;

const BlogCard = ({ title, image, slug, category, duration, published }) => {
  let month = "";
  switch (prismicH.asDate(published).getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
  }
  const router = useRouter();
  return (
    <Link
      href={`/blog/${slug}`}
      className="text-decoration-none"
      onMouseEnter={() =>
        (document.documentElement.style.scrollBehavior = "auto")
      }
    >
      <Card>
        <div
          className="cover"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        ></div>
        <div className="text-black">
          <Row className="mt-3">
            <Col>
              <h6>
                <span
                  className="link-orange"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(
                      "/blog/category",
                      `/blog/category?q=${category}`
                    );
                  }}
                >
                  {category}
                </span>
                <span className="divider bg-black d-inline-block mx-3"></span>
                <span>
                  {month} {prismicH.asDate(published).getDate()},{" "}
                  {prismicH.asDate(published).getFullYear()}
                </span>
              </h6>
            </Col>
          </Row>
          <h4 className="h4 mb-2">{title}</h4>
          <Row className="align-items-center mb-4">
            <Col>
              <h6 className="mb-0">
                <i className="bi bi-clock me-1"></i> {duration}{" "}
                {duration > 1 ? "mins" : "min"}
              </h6>
            </Col>
            <Col>
              <h6 className="mb-0">
                Read the article <i className="bi bi-arrow-right ms-1"></i>
              </h6>
            </Col>
          </Row>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
