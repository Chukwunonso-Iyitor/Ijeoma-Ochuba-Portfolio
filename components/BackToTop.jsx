import styled from "@emotion/styled";
import { useEffect } from "react";

const ButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 996;
  cursor: pointer;
  transition: scale 0.6s cubic-bezier(0.47, 2.02, 0.31, 0.31), visibility 0.6s ease, opacity 0.6s ease;
  visibility: hidden;
  opacity: 0;
  perspective: 800px;
  &:hover {
    scale: 1.15;
  }
  &:active {
    scale: 0.9;
    box-shadow: none;
  }
`;

const goUp = () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const BackToTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const btn = document.getElementById("pageUpBtn");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        btn.style.cssText = "visibility: visible; opacity: 1;";
      } else {
        btn.style.cssText = "visibility: hidden; opacity: 0;";
      }
    });
  });
  return (
    <ButtonWrapper
      id="pageUpBtn"
      className="bg-orange shadow d-flex align-items-center justify-content-center"
      onClick={goUp}
      onMouseEnter={() =>
        (document.documentElement.style.scrollBehavior = "smooth")
      }
      onMouseLeave={() =>
        (document.documentElement.style.scrollBehavior = "auto")
      }
    >
      <i className="bi bi-arrow-up text-white"></i>
    </ButtonWrapper>
  );
};

export default BackToTop;
