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
  min-height: 90vh;
  margin-top: 73px;
  scroll-behavior: auto;
  @media (max-width: 768px){
    margin-top: 47px;
  }
  @media (max-height: 576px){
    margin-top: 47px;
  }
`;

const Layout = ({ children, settings }) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Head>
        <meta name="description" content="Ijeoma Ochuba - Portfolio" />
        <meta name="theme-color" content="#6b737a" />
        <meta property="og:title" content="Ijeoma Ochuba - UX Researcher" />
        <meta property="og:image" content="/ux-folio-og.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar settings={settings}></Navbar>
        <NavbarMobile settings={settings}></NavbarMobile>
      </header>
      <Main>{children}</Main>
      <BackToTop></BackToTop>
      <Footer settings={settings}></Footer>
    </>
  );
};

export default Layout;
