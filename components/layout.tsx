import Head from "next/head";
import React from "react";
import Footer from "./footer";
import Newsletter from "./newsletter";
import PageHeader, { IPageHeader } from "./pageHeader";

interface ILayout extends IPageHeader {
  children: React.ReactNode;
  isTextPage?: boolean;
  description: string;
}

const Layout = ({
  children,
  description,
  isTextPage = true,
  ...pageHeaderProps
}: ILayout) => {
  return (
    <div className="bg-white">
      <Head>
        <title>{pageHeaderProps.title} | Open Climate Fix</title>
        <meta
          property="og:title"
          content={pageHeaderProps.title}
          key="ogtitle"
        />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} key="ogdesc" />

        {/* Twitter */}
        {/* https://cards-dev.twitter.com/validator */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="openclimatefix" key="twhandle" />

        {/* Open Graph */}
        {/* https://ogp.me/ */}
        {/* <meta property="og:url" content={currentURL} key="ogurl" /> */}
        {/* <meta property="og:image" content={pageHeaderProps.titleImage} key="ogimage" /> */}
        <meta
          property="og:site_name"
          content={"Open Climate Fix"}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={pageHeaderProps.title}
          key="ogtitle"
        />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <PageHeader {...pageHeaderProps} />

      <section className="container px-4 mx-auto sm:p-0 mb-36">
        {isTextPage ? (
          <article className="mx-auto mt-10 mb-20 prose">{children}</article>
        ) : (
          children
        )}
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;
