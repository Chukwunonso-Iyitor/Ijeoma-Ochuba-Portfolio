import styled from "@emotion/styled";
import Link from "next/link";
import { PrismicRichText, PrismicImage } from "@prismicio/react";

const Hero = styled.section`
  &.hero-banner {
    height: 680px;
    background-image: url("/images/dots.svg");
    background-size: 20%;
    background-repeat: repeat;
    .introduction {
      h1 {
        font-weight: 700;
      }
      p {
        font-size: 22px;
      }
    }
    .hero-image {
      object-fit: cover;
      mix-blend-mode: multiply;
    }
  }

  @media (max-width: 1200px) {
    &.hero-banner{
      height: max-content;
    }
    .hero-image {
      width: 100%;
      height: auto;
    }
  }
  @media (max-width: 768px) {
    &.hero-banner {
      height: auto;
    }
  }
  @media (max-height: 576px) {
    &.hero-banner {
      height: auto;
    }
  }
`;
const HeroBanner = ({ home }) => {
  const projects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Hero className="hero-banner py-0 py-lg-5 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg introduction pe-xl-5 mt-5">
            <h2
              className="text-orange text-script"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              {home.data.name}
            </h2>
            <h1
              className="h1 mb-4"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              {home.data.position}
            </h1>
            <div
              className="text-grey mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <PrismicRichText field={home.data.hero_intro} />
            </div>

            <div
              className="mt-5"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <Link
                href="/contact"
                className="btn-orange me-2 px-4 d-inline-block me-5"
              >
                Hire me <i className="bi bi-hand-thumbs-up-fill ms-1"></i>
              </Link>
              <button type="button" className="btn-arrow" onClick={projects}>
                See Projects
              </button>
            </div>
          </div>
          <div className="col d-flex justify-content-center my-5 my-lg-0">
            <PrismicImage
              field={home.data.hero_image}
              className="hero-image d-none d-lg-block"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
            <PrismicImage
              field={home.data.hero_image}
              className="hero-image d-block d-lg-none"
            />
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default HeroBanner;
