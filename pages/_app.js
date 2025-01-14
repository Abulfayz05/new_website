import Layout from "../component/Layout";
import Head from "next/head";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Seocontent from "./homeapi/static.json";
import Gtag from "../component/Gtag";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <div>
      <NextNProgress color="blueviolet" />
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          <meta
            name="google-site-verification"
            content="bFnjq-PIuIrpOIHmhgutTVLrhdHsCZTam66nqRCiE0k"
          />
          <link rel="icon" href="/faviconnew.svg" />
        </Head>

        {Seocontent?.seocontent
          .filter((p) => p.languages_code === locale)
          .map(({ title, desc }, i) => (
            <NextSeo
              key={i}
              title={title}
              description={desc}
              titleTemplate={title}
            />
          ))}
        <Gtag />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
