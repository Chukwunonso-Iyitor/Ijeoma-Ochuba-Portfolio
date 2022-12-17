import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";

const Hero = styled.section`
  &.hero-banner {
    height: 580px;
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
      .waving-hand {
        cursor: none;
        position: relative;
        bottom: 8px;
        transition: scale 0.6s ease;
        animation-fill-mode: backwards;
        &:hover {
          scale: 1.2;
          animation: oscillate 0.8s linear infinite alternate;
        }
      }
    }
    .hero-image {
      object-fit: cover;
    }
  }

  @media (max-width: 1200px) {
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
`;
const HeroBanner = ({ home }) => {
  const caseStudies = () => {
    document
      .getElementById("case-studies")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Hero className="hero-banner py-0 py-lg-5 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg introduction pe-xl-5 mt-5">
            <h1
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <em className="me-3">
                Hello!{" "}
                <span className="waving-hand d-inline-block">
                  <Image
                    src="/images/wave-hand.svg"
                    alt="wave"
                    width={70}
                    height={70}
                  />
                </span>
              </em>
              I&apos;m Ijeoma{" "}
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
              <Link href="/contact" className="btn-grey me-2">
                Hire me
              </Link>
              <button
                type="button"
                className="btn-grey-alt"
                onClick={caseStudies}
              >
                See work
              </button>
            </div>
          </div>
          <div className="col d-flex justify-content-center my-5 my-lg-0">
            <Image
              src="/images/ux-hero.svg"
              alt="UX design models"
              width={600}
              height={400}
              className="hero-image d-none d-lg-block"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              data-aos-delay="400"
            />
            <Image
              src="/images/ux-hero.svg"
              alt="UX design models"
              width={600}
              height={400}
              className="hero-image d-block d-lg-none"
            />
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default HeroBanner;
