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
    <Title className={`row ${props.className}`}>
      <div className="col">
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
