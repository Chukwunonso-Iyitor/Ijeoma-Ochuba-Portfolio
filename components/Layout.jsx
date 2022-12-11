import Head from "next/head";
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Portfolio | Ijeoma Ochuba</title>
                <meta name="description" content="Ijeoma Ochuba - Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>{children}</main>
        </>
    );
}

export default Layout;
