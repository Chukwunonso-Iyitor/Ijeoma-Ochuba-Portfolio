import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { navdata } from "../store/navdata";

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
      .profile-pic {
        object-fit: cover;
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
const Navbar = () => {
  const router = useRouter();
  return (
    <Nav className="nav-bar">
      <div className="container py-3">
        {" "}
        <div className="row justify-content-between align-items-center">
          {/* Logo  */}
          <div className="col profile-logo ">
            <Link
              href="/"
              className="d-flex align-items-center text-decoration-none"
            >
              {" "}
              <Image
                src="/profile.jpg"
                alt="Ijeoma Ochuba"
                width={40}
                height={40}
                className="profile-pic rounded-circle d-block mx-2"
              />
              <div>
                <h4 className="mb-1 text-black">Ijeoma Ochuba</h4>
                <h6 className="mb-0 text-grey">UX/Product Designer</h6>
              </div>
            </Link>
          </div>

          {/* Routes  */}
          <div className="col-6">
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
              href="https://www.linkedin.com/in/ijoch/"
              target="_blank"
              rel="noreferrer"
              className="btn-grey"
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
