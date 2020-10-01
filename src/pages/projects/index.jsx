import React from 'react';
import { Link } from 'gatsby';
import SEO from '../../components/seo';

import Layout from '../../components/Layout';

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <main className="markdown">
      <p>
        From understanding where solar generation capacity like solar panels is
        located, opening up energy data to predicting how much energy will be
        produced &ndash; our projects cover a variety of topics.
      </p>

      <h2 id="forecasting">1. Forecasting</h2>
      <p>
        Forecasting solar photovoltaic (PV) power production is hard: As clouds
        move over PV panels, the power output moves up and down rapidly. To keep
        the energy grid in balance, operators need to have readily available
        power generation reserves which usually come from fossil fuel sources.
      </p>
      <p>
        If we have more accurate predictions of how much electricity a PV
        installation will produce over the next few hours then we can reduce the
        amount of fossil fuel reserve required. By making solar energy more
        predictable we will make it easier for the grid to absorb more PV
        generation and for investors to reduce the risk of solar investments.
        Supported by the European Space Agency and many other partners we are
        investigating how to use Machine Learning and satellite images to
        improve forecasts of PV power generation.
      </p>
      <p>
        <Link to="/projects/forecasting">
          &gt; Learn more about Forecasting
        </Link>
        <br />
        <Link to="https://mailchi.mp/openclimatefix/pv-forecasting-for-energy-traders">
          &gt; Learn more about Forecasting for Energy Traders
        </Link>
      </p>

      <h2 id="open-energy-data">2. Open Energy Data</h2>
      <p>
        Data is needed for everything: To balance the grid, to decide where to
        install the next wind farm, to train machine learning models and more.
        However, data is hard to access, especially in the energy sector. It’s
        hard to find data and it’s often difficult to use. Together with the
        Open Data Institute, Icebreaker One, Passiv Systems, along with others;
        and based on the recommendations of the Energy Data Taskforce in 2019,
        we are working on enabling sharing of energy data - focussed initially
        on PV data - to improve the efficiency of the grid.
      </p>
      <p>
        <Link to="/projects/open-energy-data">
          &gt; Learn more about Open Energy Data
        </Link>
      </p>

      <h2 id="pv-mapping">3. Solar Panel Mapping</h2>
      <p>
        To accurately forecast solar power generation, we need to know where all
        the PV panels are. That is still largely unknown today in the UK. We are
        supporting the{' '}
        <a href="https://www.openstreetmap.org/">OpenStreetMap</a> community to
        map the location of the world's PV panels. OpenStreetMap is the
        Wikipedia of maps: anyone can edit the database. We use a combination of
        machine learning and the wisdom of the crowd to locate PV panels and add
        them to OpenStreetMap. We are also working on ways to combine and then
        de-duplicate existing asset registers.
      </p>
      <p>
        <Link to="/projects/pv-mapping">
          &gt; Learn more about Solar Panel Mapping
        </Link>
      </p>
    </main>
  </Layout>
);

export default ProjectsPage;
