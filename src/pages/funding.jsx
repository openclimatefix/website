import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const fundingPage = () => (
  <Layout>
    <h1 id="funding" className="mt-16 mb-2">
      Funding
    </h1>
    <div className="markdown">
      <p>
        Our intention is that Open Climate Fix will reduce emissions by at least
        millions of tonnes, at a cost of a few dollars per tonne, so
        considerably cheaper than most other interventions.
      </p>
      <a href="https://business.esa.int/">
        <img
          className="mt-10"
          style={{ maxWidth: '12rem' }}
          alt="Logo ESA Space Solutions"
          src="https://raw.githubusercontent.com/openclimatefix/website/master/src/images/sponsor_esa.png"
        />
      </a>
      <div>
        <p>
          <a href="https://business.esa.int/">ESA Business Applications</a> aims
          to show that space is open for business and has the power to improve
          our everyday lives on Earth. They do this by helping companies to
          integrate space data and technology into commercial services.
        </p>
        <p>
          ESA awarded us an AI Kick-Start co-funding for six months. Kick-Start
          activities are compact Feasability Studies to explore new service
          concepts that use space tech. We will ask potential users of&nbsp;
          <Link to="/projects/forecasting">nowcasting</Link>
          &nbsp;what they need; and how best to serve those needs.
        </p>
      </div>
      <a href="https://theodi.org/">
        <img
          className="mt-10"
          style={{ maxWidth: '12rem' }}
          alt="Logo Open Data Institute"
          src="https://raw.githubusercontent.com/openclimatefix/website/master/src/images/logos/odi.png"
        />
      </a>
      <div>
        <p>
          The <a href="https://theodi.org/">Open Data Institute</a> supplies
          funding for{' '}
          <a href="https://theodi.org/article/new-funding-for-uk-projects-working-on-sharing-data-that-leads-to-better-decisions-for-climate-change-energy-and-health/">
            seven UK initiatives and projects
          </a>{' '}
          as part of their Innovate UK funded R&amp;D programme. Open Climate
          Fix is one of the seven winners of the fund.
        </p>
        <p>
          The Open Data Institute works with companies and governments to build
          an open, trustworthy data ecosystem, where people can make better
          decisions using data. We will be using the funding, support and
          mentorship provided by experts at the Open Data Institute to further
          develop our work on opening up energy data.
        </p>
      </div>
      <a href="https://www.raais.org/">
        <img
          className="mt-10"
          style={{ maxWidth: '12rem' }}
          alt="Logo RAAIS Foundation"
          src="https://raw.githubusercontent.com/openclimatefix/website/master/src/images/sponsor_raais.png"
        />
      </a>
      <div>
        <p>
          The <a href="https://www.raais.org/">RAAIS Foundation</a>{' '}
          mission is to advance education and research in artificial
          intelligence for the common good.
        </p>
        <p>
          We believe that the real-world impact of AI research will go well
          beyond solely for-profit applications.
        </p>
        <p>
          The Foundation creates educational content for the general public to
          build awareness and knowledge about AI technology and its impact on
          the world.
        </p>
        <p>
          The Foundation awards grants for open source research and projects
          that align with our mission. In particular, we support communities
          that would otherwise not have a chance to participate in advancing
          AI.
        </p>
      </div>
      <p className="mt-16">
        If you are into climate philanthropy - or if you know of anyone else who
        is, please <a href="mailto:info@openclimatefix.org">get in touch</a>.
      </p>
    </div>
  </Layout>
);

export default fundingPage;
