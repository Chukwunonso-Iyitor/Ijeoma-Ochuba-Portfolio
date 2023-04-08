import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { navdata } from "../store";
import { PrismicNextImage } from "@prismicio/next";

const Nav = styled.nav`
  &.nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background-color: #ffffffdd;
    backdrop-filter: blur(6px);
    transition: 0.2s ease;
    .nav-link {
      list-style-type: none;
    }
    .profile-logo {
      height: 40px;
      .profile-pic {
        object-fit: cover;
        width: 40px;
        height: 40px;
      }
      h4 {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 16px;
      }
      h6 {
        font-family: "Oxygen", sans-serif;
        font-weight: lighter;
        font-size: 12px;
        letter-spacing: 0.6px;
      }
    }
  }
`;
const Navbar = ({ settings }) => {
  const router = useRouter();
  return (
    <Nav className="nav-bar d-none d-lg-block">
      <div className="container py-3">
        {" "}
        <div className="row justify-content-between align-items-center">
          {/* Logo  */}
          <div className="col-3 profile-logo ">
            <Link
              href="/"
              className="d-flex align-items-center text-decoration-none"
            >
              {" "}
              <PrismicNextImage
                field={settings.data.picture}
                className="profile-pic rounded-circle d-block mx-2"
              />
              <div>
                <h4 className="mb-1 text-black">{settings.data.name}</h4>
                <h6 className="mb-0 text-grey">{settings.data.role}</h6>
              </div>
            </Link>
          </div>

          {/* Routes  */}
          <div className="col-7 col-xl-6">
            <ul className="mb-0 d-flex justify-content-center">
              {navdata.map(({ page, path }, index) => (
                <li
                  key={index}
                  className="nav-link d-inline-block mx-4 text-center"
                >
                  <Link
                    href={path}
                    className={`text-decoration-none py-2 ${
                      router.pathname == path ? "active" : ""
                    }`}
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume  */}
          <div className="col">
            <a
              href={settings.data.resume.url}
              target="_blank"
              rel="noreferrer"
              className="btn-orange-sm"
            >
              Resumé
            </a>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
