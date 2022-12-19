import React from "react";
import styled from "@emotion/styled";

const FooterMain = styled.footer`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1233%26quot%3b)' fill='none'%3e%3cpath d='M1281.2212719788058 342.800709782705L1356.9737182305973 206.13967916584147 1220.3126876137337 130.38723291405006 1144.5602413619422 267.0482635309136z' fill='rgba(88%2c 88%2c 88%2c 0.23)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1471.4864573056595 414.52173441416505L1462.8937075938375 344.53940399220767 1362.2165868168124 392.41969377091937z' fill='rgba(88%2c 88%2c 88%2c 0.23)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M709.6834188456054 424.8137341048556L794.2633902287461 343.1358051666531 712.5854612905435 258.5558337835124 628.0054899074029 340.2337627217149z' fill='rgba(88%2c 88%2c 88%2c 0.23)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1075.8224041805413 311.32312515827465L1017.6671017497899 383.1389427674454 1147.6382217897121 369.47842758902596z' fill='rgba(88%2c 88%2c 88%2c 0.23)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M221.84 255.41 a147.99 147.99 0 1 0 295.98 0 a147.99 147.99 0 1 0 -295.98 0z' fill='rgba(88%2c 88%2c 88%2c 0.23)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M32.97 15.8 a179.18 179.18 0 1 0 358.36 0 a179.18 179.18 0 1 0 -358.36 0z' fill='rgba(88%2c 88%2c 88%2c 0.23)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M808.0655093943657-5.380440899924103L704.8933911021192-72.38119792518074 637.8926340768626 30.790920367065745 741.064752369109 97.79167739232238z' fill='rgba(88%2c 88%2c 88%2c 0.23)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M318.68003893138115 190.75876373818443L413.2947223802203 207.44188520140537 391.0120628506321 57.178299296536125z' fill='rgba(88%2c 88%2c 88%2c 0.23)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1019.2140171293314 424.0870609294539L1001.6478052627195 534.9957577093769 1112.5565020426427 552.5619695759888 1130.1227139092543 441.6532727960657z' fill='rgba(88%2c 88%2c 88%2c 0.23)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M892.7385722209334 144.5567408237759L883.7594441666748 229.98743761312653 969.1901409560255 238.9665656673851 978.1692690102841 153.53586887803448z' fill='rgba(88%2c 88%2c 88%2c 0.23)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1233'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");

  .footer-top {
    h4 {
      font-weight: 300;
    }
    p {
      font-size: 14px;
      font-weight: 300;
    }
    .social-link {
      font-size: 20px;
    }
  }
  .footer-base {
    p {
      font-size: 14px;
    }
  }
`;

const Footer = ({ settings }) => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterMain className="bg-dark">
      {/* Footer top  */}
      <div className="footer-top pt-4 pb-2">
        <div className="container p-4 text-white text-center">
          <div className="row">
            <div className="col">
              <h5 className="mb-3">Stay in Touch</h5>
              <p>Thank you for visiting my portfolio.</p>
              {settings.data.email != null && (
                <>
                  <p>
                    <a
                      href={`mailto: ${settings.data.email} `}
                      className="link-orange"
                    >
                      <i className="bi bi-envelope-fill me-1"></i>{" "}
                      {settings.data.email}
                    </a>
                  </p>
                </>
              )}
              {settings.data.phone != null && (
                <>
                  <p>
                    <a
                      href={`tel: ${settings.data.phone} `}
                      className="link-orange"
                    >
                      <i className="bi bi-telephone-fill me-1"></i>{" "}
                      {settings.data.phone}
                    </a>
                  </p>
                </>
              )}

              {/* Social Media  */}
              <p className="mb-0 mt-4">
                {/* Facebook  */}
                {settings.data.facebook.url != null && (
                  <>
                    <a
                      href={settings.data.facebook.url}
                      className="link-orange social-link mx-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                  </>
                )}

                {/* LinkedIn  */}
                {settings.data.linkedin.url != null && (
                  <>
                    <a
                      href={settings.data.linkedin.url}
                      className="link-orange social-link mx-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </>
                )}

                {/* Instagram  */}
                {settings.data.instagram.url != null && (
                  <>
                    <a
                      href={settings.data.instagram.url}
                      className="link-orange social-link mx-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </>
                )}


                {/* Twitter  */}
                {settings.data.twitter.url != null && (
                  <>
                    <a
                      href={settings.data.twitter.url}
                      className="link-orange social-link mx-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                  </>
                )}

                 {/* Behance */}
                 {settings.data.behance.url != null && (
                  <>
                    <a
                      href={settings.data.behance.url}
                      className="link-orange social-link mx-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-behance"></i>
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Base  */}
      <div className="footer-base">
        <div className="container text-white px-5">
          <hr />
          <div className="row justify-content-between">
            <div className="col-12 col-sm">
              <p className="mb-4">
                &copy; {currentYear} Ijeoma Ochuba. All Rights Reserved.
              </p>
            </div>
            <div className="col">
              <p className="text-sm-end mb-5 mb-sm-0">
                Website by{" "}
                <a
                  href="https://robertiyitor.digital/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-orange"
                >
                  Async Media
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </FooterMain>
  );
};

export default Footer;
