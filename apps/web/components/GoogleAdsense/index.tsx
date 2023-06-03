import Script from "next/script";
import { useEffect } from "react";

export default function GoogleAdsense() {
  return (
    <Script
      id="Adsense-id"
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
      async
      strategy="afterInteractive"
      onError={(e) => {
        console.error("Script failed to load", e);
      }}
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />
  );
}

declare global {
  interface Window {
    adsbygoogle: any;
  }
}
export const AdBanner = (props: any) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: "block",
        overflow: "hidden",
      }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
      {...props}
    />
  );
};
