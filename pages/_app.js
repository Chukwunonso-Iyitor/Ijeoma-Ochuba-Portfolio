import "../styles/scss/main.scss";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";

import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <Script src="/scripts/hotjar.js" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-1Y7EXVZ879" />
      <Script src="/scripts/gtm.js" />
      <PrismicPreview repositoryName='ijeoma-ochuba'>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
