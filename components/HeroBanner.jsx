import styled from "@emotion/styled";

const Hero = styled.section`
  height: 580px;
  background-image: url("/images/dots.svg");
  background-size: 20%;
  background-repeat: repeat;
  .introduction{
    h1{
        font-weight: 700;
    }
    p{
        font-size: 22px;
    }
  }
`;
const HeroBanner = () => {
  return (
    <Hero className="py-5 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col introduction">
            <h1><em className="me-3">Hello! 👋</em> I&apos;m Ijeoma </h1>
            <p className="text-grey mt-4">
              I am a driven and thorough UX designer who thoroughly enjoys engaging
              in all steps of the product life cycle. My main goal is to create
              products that look beautiful and function intuitively for the
              user.
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </Hero>
  );
};

export default HeroBanner;