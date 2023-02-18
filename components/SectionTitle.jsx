import React from "react";
import styled from "@emotion/styled";

const Title = styled.div`
  h2 {
    letter-spacing: 1px;
    font-size: 42px;
    font-weight: 700;
  }
`;

const SectionTitle = (props) => {
  return (
    <Title
      className={` ${props.className}`}
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="800"
    >
      <h2>
        {props.title} <span className="text-span">{props.span}</span>
      </h2>
    </Title>
  );
};

export default SectionTitle;
