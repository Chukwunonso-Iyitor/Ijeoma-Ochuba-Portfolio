import React from "react";
import styled from "@emotion/styled";

const Title = styled.div`
  h2 {
    letter-spacing: 1px;
    font-size: 28px;
  }
`;

const SectionTitle = (props) => {
  return (
    <Title className={`row col-12 col-sm-10 col-lg-8 col-xl-6 ${props.className}`}>
      <div className="col-2 col-sm">
        <hr className="text-black" />
      </div>
      <div className="col">
        <h2 className="text-center">{props.title}</h2>
      </div>
      <div className="col-1">
        <hr className="text-black" />
      </div>
    </Title>
  );
};

export default SectionTitle;
