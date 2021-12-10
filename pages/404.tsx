import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import PageHeader from "../components/pageHeader";
import aboutBackground from "../public/backgrounds/clouds.jpg";

const Custom404Page: NextPage = () => {
  return (
    <div className="bg-white">
      <PageHeader
        bgImage={aboutBackground}
        title="404 - Page Not Found"
        teaserText="Whooops! We are not sure how you got here, but this page has been lost."
      />

      <section className="container px-4 mx-auto sm:p-0 mb-36">
        <article className="mx-auto mt-10 mb-20 prose">
          To get back on track, why not:
          <ul>
            <li>
              <Link href="/projects">
                <a>Discover our projects</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Find out who we are</a>
              </Link>
              , or
            </li>
            <li>
              <Link href="/blog">
                <a>Check out our blog?</a>
              </Link>
            </li>
          </ul>
        </article>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Custom404Page;
