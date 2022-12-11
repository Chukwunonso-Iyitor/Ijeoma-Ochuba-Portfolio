import styled from "@emotion/styled";
import Link from "next/link";
import { navdata } from "../store/navdata";

const Nav = styled.nav`
  .nav-bar {
    .navlink {
      list-style-type: none;
    }
  }
`;
const Navbar = () => {
  return (
    <Nav className="nav-bar">
      <div className="container py-4">
        {" "}
        <div className="row justify-content-between align-items-center">
          {/* Logo  */}
          <div className="col"></div>

          {/* Routes  */}
          <div className="col-6">
            <ul className="mb-0 d-flex justify-content-center">
              {navdata.map(({ page, path }, index) => (
                <li
                  key={index}
                  className="navlink d-inline-block mx-4 text-center"
                >
                  <Link href={path} className="text-decoration-none">{page}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume  */}
          <div className="col">
            <a
              href="https://taamannae.dev/projects/rom"
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
