/**
 * the code below explains how to configure layouts in the project.
 * following code is for the default layout of the project.
 */
import type { ReactElement } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { NextPageWithLayout } from "../..";
import LayoutFlow from "../LayoutFlow";
import React from "react";

/**
 * Layout function which adds Navbar and footer
 * @param props.children is the page
 * @defines layout of the page
 * @returns page with used layout components
 */
function Layout({ children, header, footer }: any) {
  return (
    <>
      <LayoutFlow />

      <main className="">
        {header ? <Header /> : <></>}
        <section className="min-h-[calc(100vh_-_70px)] ">{children}</section>
        {footer ? <Footer /> : <></>}
      </main>
    </>
  );
}

/**
 * @param page is the page which will be wrapped with this layout
 * @returns the a page with above layout
 */
export function DefaultLayout(page: ReactElement) {
  return (
    <Layout header={true} footer={true}>
      {page}
    </Layout>
  );
}

export function DefaultHeaderLayout(page: ReactElement) {
  return (
    <Layout header={true} footer={false}>
      {page}
    </Layout>
  );
}

/**
 * this is layout provider helper function
 * @param Component is the component in which getLayout fn
 * @returns the a page with the assigned layout
 */
function withDefaultLayout(Component: NextPageWithLayout): NextPageWithLayout {
  Component.getLayout = DefaultLayout;
  return Component;
}

export function withHeaderLayout(
  Component: NextPageWithLayout
): NextPageWithLayout {
  Component.getLayout = DefaultHeaderLayout;
  return Component;
}

export default withDefaultLayout;
