import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import aboutBackground from "../public/backgrounds/clouds.jpg";

const Custom404Page: NextPage = () => {
  const teaserText =
    "Whooops! We are not sure how you got here, but this page has been lost.";
  return (
    <Layout
      bgImage={aboutBackground}
      title="404 - Page Not Found"
      teaserText={teaserText}
      description={teaserText}
    >
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
    </Layout>
  );
};

export default Custom404Page;
