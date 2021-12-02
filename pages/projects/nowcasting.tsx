import React from "react";
import { NextPage } from "next";

import PageHeader from "../../components/pageHeader";
import LogoCloud, { PARTNER_LOGOS } from "../../components/logoCloud";
import Newsletter from "../../components/newsletter";
import Footer from "../../components/footer";

import projectsBackground from "../../public/backgrounds/clouds.jpg";
import nowcastingLogo from "../../public/logos/ocf_nowcasting_cw.png";

const NowcastingPage: NextPage = () => {
  return (
    <div className="bg-white">
      <PageHeader
        bgImage={projectsBackground}
        title="Nowcasting"
        titleImage={nowcastingLogo}
        teaserVideoURL="https://www.youtube-nocookie.com/embed/IOp-tj-IJpk?controls=0"
      />

      <section className="container px-4 mx-auto sm:p-0 mb-36">
        <article className="mx-auto mt-10 prose mb-36">
          <p className="pl-6 text-2xl border-l-4">
            Forecasting solar photovoltaic (PV) power production is hard: As
            clouds move over PV panels, the power output moves up and down
            rapidly. We devised a solution to keep the balance.
          </p>
          <h2>Why?</h2>
          <p>
            Solar Photovoltaics (PV) is one of the most significant sources of
            uncertainty in the UK’s power forecasts. To mitigate against the
            risk of a large cloud sweeping across the country (and hence the
            grid losing gigawatts of PV generation), the Electricity System
            Operator (National Grid) keeps lots of natural gas generators
            operating at less than full capacity, so they have headroom to ramp
            up quickly (spinning reserve).
          </p>
          <p>
            The physics of the grid dictate that - at every instant - supply
            must precisely match demand. So, any loss in PV supply must be
            immediately replaced. These gas turbines are kept idling because
            they take several hours to start up from cold, but they can be
            ramped up very quickly from idle. Spinning reserve costs a lot of
            money and pumps out a lot of CO2.
          </p>
          <figure>
            <img
              src="https://source.unsplash.com/XGAZzyLzn18/624x384"
              alt="Solar panels on a field"
            />
            <figcaption className="text-center">
              Photo by{" "}
              <a href="https://unsplash.com/photos/XGAZzyLzn18">
                American Public Power Association
              </a>{" "}
              on <a href="https://unsplash.com/">Unsplash</a>
            </figcaption>
          </figure>
          <p>
            If National Grid had better PV forecasts, even for the next few
            hours, they could reduce the amount of spinning reserve required,
            and hence reduce emissions (by about 100,000 tonnes per year for the
            UK{" "}
            <a href="https://docs.google.com/document/d/1sfBJ48_hxSEH-XFrwmH0leS4rSsrBKgwzfoeoqGRPfg/edit#heading=h.m4udy6vx0t7k">
              [Details]
            </a>
            ) and reduce costs.
          </p>
          <p>
            Electricity traders and PV farm owners will be able to use better
            short-term PV forecasts to optimise trading decisions in intra-day
            markets.
          </p>
          <p>
            Further, this unpredictability of PV power inhibits the investment
            and onboarding of new PV generation farms, as the local and national
            system operators are concerned about these unexpected weather events
            destabilising the grid. By providing greater predictability of PV
            power output, we can make PV power investments lower risk for all
            stakeholders.
          </p>

          <h2>What?</h2>
          <p>
            Nowcasting is a bit of an odd term. It means &ldquo;forecasting for
            the next few hours&rdquo;. In general, nowcasting does not use the
            hugely complex and computationally-expensive numerical weather
            models that run on supercomputers and constitute the
            bread-and-butter for most forecasting agencies. Instead, nowcasting
            usually uses statistical or machine learning techniques to take
            recent observations and roll them forwards.
          </p>

          <h2>How?</h2>
          <p>
            It turns out that most nowcasting research up until now has been
            done on rainfall (because predicting floods saves lives and
            property). Relatively little research has been done on nowcasting
            sunlight.
          </p>
          <p>
            Our main interest is in trying to build machine learning models to
            forecast solar PV (which basically boils down to trying to predict
            the movement and evolution of clouds). We will spend the majority of
            the next year or two writing code to experiment with new ways to
            predict sunlight for the next few hours. Inputs to the model may
            include satellite images of clouds, numerical weather predictions,
            vertical cloud profiles, and geographical information. We will
            utilize the team’s experience in Machine Learning as well as
            contributors from the open source community to accelerate progress.
          </p>
          <p>
            As quickly as possible, we would like to get early-stage prototype
            PV forecasts displayed in the National Grid control room, to
            validate our model’s effectiveness and so we can start measuring the
            impact on emissions and cost. Beyond that we will release a
            nowcasting product for general market consumption.
          </p>
          <h2 className="pb-4">Project Supporters</h2>
          <LogoCloud
            logos={[
              PARTNER_LOGOS["esa"],
              PARTNER_LOGOS["google"],
              PARTNER_LOGOS["nvidia"],
            ]}
          />
        </article>
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default NowcastingPage;
