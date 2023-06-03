/* eslint-disable */
// @ts-ignore
export {};
declare global {
  type TransltaionKeys =
    | "deploy-description"
    | "deploy-title"
    | "description"
    | "documentation-description"
    | "documentation-title"
    | "examples-description"
    | "examples-title"
    | "footer-powered-by"
    | "learn-description"
    | "learn-title"
    | "og-description"
    | "og-title"
    | "only-en"
    | "only-ko"
    | "page-file-path"
    | "title";
}

import type {
  NextComponentType,
  NextPageContext,
  NextLayoutComponentType,
} from "next";
import type { AppProps } from "next/app";

declare module "next" {
  type NextLayoutComponentType<P = {}> = NextComponentType<
    NextPageContext,
    any,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module "next/app" {
  type AppLayoutProps<P = {}> = AppProps & {
    Component: NextLayoutComponentType;
  };
}
