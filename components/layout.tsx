import React from "react";
import Footer from "./footer";
import Newsletter from "./newsletter";
import PageHeader, { IPageHeader } from "./pageHeader";

interface ILayout extends IPageHeader {
  children: React.ReactNode;
  isTextPage?: boolean;
}

const Layout = ({
  children,
  isTextPage = true,
  ...pageHeaderProps
}: ILayout) => {
  return (
    <div className="bg-white">
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
