import React from "react";
import { GetStaticProps } from "next";

import LogoCloud, { PARTNER_LOGOS } from "../../components/logoCloud";

import openEnergyBackground from "../../public/backgrounds/open-energy.jpg";
import Layout from "../../components/layout";
import { BlogPost, getPostsByProject } from "../../lib/blog";
import BlogPostsTeaser from "../../components/blog-posts-teaser";

const OpenEnergyDataPage = ({ allPosts }: { allPosts: BlogPost[] }) => {
  return (
    <Layout
      bgImage={openEnergyBackground}
      title="Open Energy Data"
      teaserText="Data is needed for everything: To balance the grid, to decide where to install the next wind farm, to train machine learning models and more."
      description="Data is needed for everything: To balance the grid, to decide where to install the next wind farm, to train machine learning models and more."
      isTextPage={false}
    >
      <article className="mx-auto mt-10 mb-20 prose">
        <h2>Why?</h2>
        <p>
          We are facing the huge challenge of decarbonizing our electricity
          grid. The good news is that we are making amazing progress installing
          renewable generation and batteries and flexing demand. But these
          millions of diverse, distributed systems must work together by
          communicating in the same language. The bad news is that today, these
          systems speak wildly different languages, and so it is very hard for
          these systems to work together.
        </p>
        <p>
          Sharing data in the energy system will reduce costs, lower the barrier
          to entry for innovators, and - the bit that we at Open Climate Fix are
          most passionate about - help achieve net-zero emissions{" "}
          <a href="https://es.catapult.org.uk/reports/energy-data-taskforce-report/">
            [Energy Data Taskforce report]
          </a>
          .
        </p>
        <h2>What?</h2>
        <p>
          We need to, as a community, define elegant, open standards to allow
          energy systems to share data whilst ensuring security, privacy and
          legal protection, and rewarding data owners for sharing their data.
        </p>
        <p>
          For example, we need to decide on how to collaboratively evolve a
          vocabulary to describe energy assets; how to uniquely identify
          physical assets; how to express that - for example - only authorised
          users can access domestic meter data, but everyone can see data from
          the grid supply point from which that domestic meter is fed. And,
          crucially,{" "}
          <a href="https://medium.com/@agentGav/the-web-of-data-vs-the-web-of-pages-a560f3e73c21">
            there are many non-technical problems to solve to enable this web of
            data
          </a>
          .
        </p>
        <p>
          If we - as a community - get these standards right then, over the
          coming years and decades, open standards will transform everything in
          the energy system including network management; demand-side
          flexibility at scale; electric vehicle smart charging; energy
          forecasting; resource planning; decarbonisation of heating; community
          energy; research; policy; coordination of heat, power and transport;
          the list goes on.
        </p>
        <h2>How?</h2>
        <p>
          In creating these standards, we must remember that energy companies
          are already very busy doing a world-class job of keeping the lights
          on. So any new standard must be as simple to implement as possible.
          This is a great opportunity to remove the complexity that exists only
          for historical reasons. What is really needed today? How can we make
          these standards as easy-to-use as possible, whilst significantly
          improving the system?
        </p>
        <p>
          We can also make life easier by glueing together existing parts,
          rather than reinventing the wheel.
        </p>
        <h2 className="pb-4">Project Supporters</h2>
        <LogoCloud
          logos={[PARTNER_LOGOS["odi"], PARTNER_LOGOS["icebreaker"]]}
        />
      </article>
      <BlogPostsTeaser allPosts={allPosts} isProjectSpecificTeaser={true} />
    </Layout>
  );
};

export default OpenEnergyDataPage;

interface Props {
  allPosts: BlogPost[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPosts = getPostsByProject("open-energy");

  return {
    props: { allPosts },
  };
};
