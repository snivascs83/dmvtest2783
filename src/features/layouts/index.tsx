import type { ReactElement } from "react";
import type { NextPage } from "next";

export type TLayout = (page: ReactElement) => ReactElement;

export type NextPageWithLayout = NextPage & {
  getLayout?: TLayout;
};
