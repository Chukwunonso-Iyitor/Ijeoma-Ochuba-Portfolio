import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { navdata } from "../store/navdata";

const NavMobile = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 998;
  i {
    scale: 2;
  }
  .nav-bar {
    background-color: #ffffffdd;
    backdrop-filter: blur(6px);
    .profile-pic{
        object-fit: cover;
    }
  }
  #mobile-nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    visibility: hidden;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.5s ease-out;
    .menu-items {
      height: 100vh;
      overflow-y: auto;
    }
  }
  .nav-links {
    a {
      font-size: 22px;
    }
  }
`;

const NavbarMobile = (props) => {
  const openNav = () => {
    const menu = document.getElementById("mobile-nav-menu");
    menu.style.cssText =
      "visibility: visible; opacity: 1; transform: translateX(0%)";
  };
  const closeNav = () => {
    const menu = document.getElementById("mobile-nav-menu");
    menu.style.cssText =
      "visibility: hidden; opacity: 0; transform: translateX(100%);";
  };
  const router = useRouter();
  return (
    <NavMobile className={`${props.className} d-block d-lg-none`}>
      <div className="container-fluid mobile-nav">
        {/* Nav bar  */}
        <div className="row justify-content-between align-items-center nav-bar py-2">
          <div className="col">
            <Link href="/">
              <Image
                src="/profile.jpg"
                alt="Ijeoma Ochuba"
                width={30}
                height={30}
                className="rounded-circle profile-pic"
              />
            </Link>
          </div>
          <div className="col d-flex justify-content-end pe-4">
            <i className="bi bi-list" onClick={openNav}></i>
          </div>
        </div>

        {/* Nav menu  */}
        <div id="mobile-nav-menu">
          <div className="row">
            <div className="col menu-overlay" onClick={closeNav}></div>
            <div className="col-10 col-sm-6 menu-items bg-white rounded">
              <div className="d-flex justify-content-end px-4 pt-3">
                <i className="bi bi-x-lg" onClick={closeNav}></i>
              </div>
              <div className="my-2 nav-link py-5 px-4">
                {navdata.map((link, index) => (
                  <Link
                    href={link.path}
                    key={index}
                    className={`text-decoration-none d-block p-3 ${
                      router.pathname == link.path ? "active" : ""
                    }`}
                  >
                    {link.page}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavMobile>
  );
};

export default NavbarMobile;
