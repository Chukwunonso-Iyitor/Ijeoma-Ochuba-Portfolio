import Head from "next/head";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Footer from "./Footer";
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = styled.main`
  min-height: 200vh;
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar></Navbar>
        <NavbarMobile></NavbarMobile>
      </header>
      <Main>{children}</Main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
