import { Html, Head, Main, NextScript } from "next/document";
import GoogleAdsense from "components/GoogleAdsense";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleAdsense />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
