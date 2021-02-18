import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CloudHero from '../components/CloudHero';
import TeamSection from '../components/TeamSection';
import LogoCloud from '../components/LogoCloud';
// import SpecialAnnouncement from '../components/SpecialAnnouncement';

import '../components/layout.css';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    {/* <SpecialAnnouncement /> */}
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
          of expertise than any individual company, so combining existing 
          islands of knowledge and accelerating progress.
        </p>
        <p>
          Our approach is to search for ML (Machine Learning) problems
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
            research labs can help solve the ML task.
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

      <h2 id="projects" className="mt-16 mb-2">
        Projects
      </h2>
      <div className="markdown">
        <p>
          From understanding where solar generation capacity like solar panels
          is located, opening up energy data to predicting how much energy will
          be produced &ndash; our projects cover a variety of topics.
        </p>

        <h3 id="forecasting">1. Forecasting</h3>
        <p>
          Forecasting solar photovoltaic (PV) power production is hard: As
          clouds move over PV panels, the power output moves up and down
          rapidly. To keep the energy grid in balance, operators need to have
          readily available power generation reserves which usually come from
          fossil fuel sources.
        </p>
        <p>
          If we have more accurate predictions of how much electricity a PV
          installation will produce over the next few hours then we can reduce
          the amount of fossil fuel reserve required. By making solar energy
          more predictable we will make it easier for the grid to absorb more PV
          generation and for investors to reduce the risk of solar investments.
          Supported by the European Space Agency and many other partners we are
          investigating how to use Machine Learning and satellite images to
          improve forecasts of PV power generation.
        </p>
        <p>
          <Link to="/projects/forecasting">
            &gt; Learn more about Forecasting
          </Link>
        </p>

        <h3 id="open-energy-data">2. Open Energy Data</h3>
        <p>
          Data is needed for everything: To balance the grid, to decide where to
          install the next wind farm, to train machine learning models and more.
          However, data is hard to access, especially in the energy sector. It’s
          hard to find data and it’s often difficult to use. Together with the
          Open Data Institute, Icebreaker One, Passiv Systems, along with
          others; and based on the recommendations of the Energy Data Taskforce
          in 2019, we are working on enabling sharing of energy data - focussed
          initially on PV data - to improve the efficiency of the grid.
        </p>
        <p>
          <Link to="/projects/open-energy-data">
            &gt; Learn more about Open Energy Data
          </Link>
        </p>

        <h3 id="pv-mapping">3. Photovoltaic Mapping</h3>
        <p>
          To accurately forecast solar power generation, we need to know where
          all the PV panels are. That is still largely unknown today in the UK.
          We are supporting the{' '}
          <a href="https://www.openstreetmap.org/">OpenStreetMap</a> community
          to map the location of the world's PV panels. OpenStreetMap is the
          Wikipedia of maps: anyone can edit the database. We use a combination
          of machine learning and the wisdom of the crowd to locate PV panels
          and add them to OpenStreetMap. We are also working on ways to combine
          and then de-duplicate existing asset registers.
        </p>
        <p>
          <Link to="/projects/pv-mapping">
            &gt; Learn more about Photovoltaic Mapping
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
