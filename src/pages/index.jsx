import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CloudHero from '../components/CloudHero';
import TeamSection from '../components/TeamSection';
import LogoCloud from '../components/LogoCloud';

import '../components/layout.css';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Header />
    <CloudHero />
    <main className="px-6 container mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mb-16">
      <h2 id="about" className="mt-16 mb-2">
        About
      </h2>
      <div className="markdown">
        <p>
          Open Climate Fix is a new non-profit research and development lab,
          totally focused on reducing greenhouse gas emissions as rapidly as
          possible. Every part of the organisation is designed to maximise
          climate impact, such as our open and collaborative approach, our rapid
          prototyping, and our attention on finding scalable &amp; practical
          solutions.
        </p>
        <p>
          By using an open-source approach, we can draw upon a much larger pool
          of knowledge and skills than any individual company, so combining
          existing islands of knowledge and accelerating progress.
        </p>
        <p>
          Our approach will be to search for ML (Machine Learning) problems
          where, if we solve a well-defined ML task, then there is likely to be
          a large climate impact. Then, for each of these challenges, we will:
        </p>
        <ol>
          <li>
            <strong>Collate &amp; release data</strong>, and write software
            tools to make it super-easy for people to consume this data.
          </li>
          <li>
            <strong>
              Run a collaborative &ldquo;global research project&rdquo;
            </strong>{' '}
            where everyone from 16-year-olds to PhD students to corporate
            research labs can help solve the ML task (and, over the last 6
            weeks, we have received over 300 emails from people who’d love to
            get involved).
          </li>
          <li>
            <strong>Help to put good solutions into production</strong>, once
            the community has developed them, so we can be reducing emissions
            ASAP.
          </li>
        </ol>
      </div>

      <h2 id="partners" className="mt-16 mb-2">
        Partners
      </h2>
      <LogoCloud />

      <h2 id="founders" className="mt-16 mb-2">
        Team
      </h2>
      <TeamSection />

      <h2 id="solar-pv" className="mt-16 mb-2">
        Our first area of focus: Solar Photovoltaics
      </h2>
      <div className="markdown">
        <p>
          Solar Photovoltaics (PV) is the largest source of uncertainty in
          electricity system operators&rsquo; forecasts. If a dark cloud moves
          across the sky, the grid can be taken by surprise and lose hundreds of
          megawatts of PV generation within minutes. This lost PV generation
          must be replaced immediately. But thermal generators take hours to
          spin-up from cold. The end result is that, whenever the sun is
          shining, the grid keeps lots of spinning-reserve online: mostly gas
          turbines, which are kept idling, but not generating electricity. This
          is expensive and carbon intensive.
        </p>
        <p>
          The grid would require less spinning reserve if they had better PV
          forecasts for the next few hours. That is, better PV forecasts would
          reduce carbon emissions, and save money. In the UK, better PV
          forecasts should save &pound;1-10 million per year (
          <a href="https://www.researchgate.net/profile/Jamie_Taylor7/project/PV-Live/attachment/58342d5c08ae5e4c8b365783/AS:431187387785227@1479814492614/download/JamieTaylor_PV_Live_v1_20161122.pdf">
            Taylor et al, 2016
          </a>
          ), and about 100,000 tonnes of CO
          <sub>2</sub> per year. Scaled up globally, the carbon savings should
          be of the order of tens of millions of tonnes per year.
        </p>
        <p>
          <Link to="/projects">
            &rarr; Learn more about our projects
          </Link>
        </p>
      </div>

      <a
        id="newsletter"
        className="block text-center mt-16 mb-20 m-auto bg-black hover:bg-gray-800 border-black hover:border-gray-800 text-2xl border-4 text-white py-1 px-2 rounded max-w-sm"
        href="http://eepurl.com/guCjvH"
      >
        Subscribe to our Newsletter
      </a>
    </main>
    <Footer />
  </>
);

export default IndexPage;
