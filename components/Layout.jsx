import Head from "next/head";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = styled.main`
  min-height: 100vh;
  margin-top: 73px;
`;

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Head>
        <title>Portfolio | Ijeoma Ochuba</title>
        <meta name="description" content="Ijeoma Ochuba - Portfolio" />
        <meta name="theme-color" content="#6b737a" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar></Navbar>
        <NavbarMobile></NavbarMobile>
      </header>
      <Main>{children}</Main>
      <BackToTop></BackToTop>
      <Footer></Footer>
    </>
  );
};

export default Layout;
