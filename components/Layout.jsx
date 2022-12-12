import Head from "next/head";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import Footer from "./Footer";
import styled from "@emotion/styled";

const Main = styled.main`
  min-height: 200vh;
  margin-top: 73px;
`;

const Layout = ({ children }) => {
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
