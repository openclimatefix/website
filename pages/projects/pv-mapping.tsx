import React from "react";
import { GetStaticProps } from "next";

import LogoCloud, { PARTNER_LOGOS } from "../../components/logo-cloud";

import mappingBackground from "../../public/backgrounds/mapping.jpg";
import Layout from "../../components/layout";
import { BlogPost, getPostsByProject } from "../../lib/blog";
import BlogPostsTeaser from "../../components/blog-posts-teaser";

const PVMappingPage = ({ allPosts }: { allPosts: BlogPost[] }) => {
  return (
    <Layout
      bgImage={mappingBackground}
      title="Solar Panel Mapping"
      teaserText="To accurately forecast solar power generation, we need to know where all the PV panels are. That is still largely unknown today in the UK."
      description="To accurately forecast solar power generation, we need to know where all the PV panels are. That is still largely unknown today in the UK."
      isTextPage={false}
    >
      <article className="mx-auto mt-10 mb-20 prose">
        <h2>Why?</h2>
        <p>
          Solar PV mapping is very closely related to our PV Forecasting
          project. Forecasting will provide solar PV yield predictions for any
          location. To be able to arrive at an accurate forecast for solar power
          generation out-turn for entire geographical regions, we need to know
          where all the PV panels are!
        </p>

        <h2>What?</h2>
        <p>
          The OpenStreetMap (OSM) community has already done an incredible job
          mapping over 100,000 PV installations in the UK (out of over 1 million
          we believe to exist in the UK) and many more across the world. Our
          goal is to help grow the effort and drastically increase the amount of
          PV mapped in OSM.
        </p>
        <p>
          Recent research (
          <a href="http://web.stanford.edu/group/deepsolar/home">DeepSolar</a>{" "}
          and
          <a href="https://arxiv.org/pdf/1902.10895.pdf">
            SolarMapper from DUKE
          </a>{" "}
          are just two examples) has shown the power of machine learning (ML)
          for identifying PV panels in satellite and aerial imagery at scale. We
          want to help pull together the datasets that are generated into a
          global open database which can be used for updating OSM.
        </p>
        <p>
          By helping to create a comprehensive open database of PV
          installations, we think that many other people will find interesting
          ways to use the data.
        </p>

        <h2>How?</h2>
        <p>
          Map PV installations manually from street level or satellite imagery
          directly in OSM. There are{" "}
          <a href="https://wiki.openstreetmap.org/wiki/Renewable_energy_in_the_United_Kingdom/Rooftop_Solar_PV">
            more details on the OSM wiki
          </a>
          .
        </p>
        <h2 className="pb-4">Project Supporters</h2>
        <LogoCloud logos={[PARTNER_LOGOS["turing"]]} />
      </article>
      <BlogPostsTeaser allPosts={allPosts} isProjectSpecificTeaser={true} />
    </Layout>
  );
};

export default PVMappingPage;

interface Props {
  allPosts: BlogPost[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPosts = getPostsByProject("pv-mapping");

  return {
    props: { allPosts },
  };
};
