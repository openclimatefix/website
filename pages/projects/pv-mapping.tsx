import React from "react";
import { NextPage } from "next";

import PageHeader from "../../components/pageHeader";
import LogoCloud, { PARTNER_LOGOS } from "../../components/logoCloud";
import Newsletter from "../../components/newsletter";
import Footer from "../../components/footer";

import mappingBackground from "../../public/backgrounds/mapping.jpg";

const PVMappingPage: NextPage = () => {
  return (
    <div className="bg-white">
      <PageHeader
        bgImage={mappingBackground}
        title="Solar Panel Mapping"
        teaserText="To accurately forecast solar power generation, we need to know where all the PV panels are. That is still largely unknown today in the UK."
      />

      <section className="container px-4 mx-auto sm:p-0 mb-36">
        <article className="mx-auto mt-10 prose mb-36">
          <h2>Why?</h2>
          <p>
            Solar PV mapping is very closely related to our PV Forecasting
            project. Forecasting will provide solar PV yield predictions for any
            location. To be able to arrive at an accurate forecast for solar
            power generation out-turn for entire geographical regions, we need
            to know where all the PV panels are!
          </p>

          <h2>What?</h2>
          <p>
            The OpenStreetMap (OSM) community has already done an incredible job
            mapping over 100,000 PV installations in the UK (out of over 1
            million we believe to exist in the UK) and many more across the
            world. Our goal is to help grow the effort and drastically increase
            the amount of PV mapped in OSM.
          </p>
          <p>
            Recent research (
            <a href="http://web.stanford.edu/group/deepsolar/home">DeepSolar</a>{" "}
            and
            <a href="https://arxiv.org/pdf/1902.10895.pdf">
              SolarMapper from DUKE
            </a>{" "}
            are just two examples) has shown the power of machine learning (ML)
            for identifying PV panels in satellite and aerial imagery at scale.
            We want to help pull together the datasets that are generated into a
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
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default PVMappingPage;
