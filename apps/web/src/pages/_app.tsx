import { DefaultSeo } from "next-seo";
import "@esrevinu/ui/dist/style.css";
import "styles/globals.css";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import GoogleAnalytics from "components/GoogleAnalytics";

import Layout from "components/Layout";
import { type L10nContextType } from "context/L10nContext";
import { DEFAULT_SEO } from "utils/seo";
import useApollo from "hooks/useApollo";
import { ApolloProvider } from "@apollo/client";

interface PageProps extends L10nContextType {}

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}) => {
  const { locale, translations, ...rest } = pageProps;
  const client = useApollo(pageProps);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ApolloProvider client={client}>
      <Layout locale={locale} translations={translations}>
        {
          //@ts-ignore
          getLayout(<Component {...rest} />)
        }
        <DefaultSeo {...DEFAULT_SEO} />
        <GoogleAnalytics />
      </Layout>
    </ApolloProvider>
  );
};

export default App;
