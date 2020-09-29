import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from '../../components/seo';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import LogoCloud from '../../components/LogoCloud';

const NowcastingPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Project: Forecasting" />
      <h1>Forecasting</h1>
      <div className="markdown">
        <div className="video-wrapper">
          <iframe
            title="Forecasting Video"
            src="https://www.youtube.com/embed/IOp-tj-IJpk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p>
          Video showing energy production of PV systems in the UK as clouds move overhead.
        </p>
        <h2>Why?</h2>
        <p>
          Solar Photovoltaics (PV) is one of the most significant sources of
          uncertainty in the UK’s power forecasts. To mitigate against the risk
          of a large cloud sweeping across the country (and hence the grid
          losing gigawatts of PV generation), the Electricity System Operator
          (National Grid) keeps lots of natural gas generators operating at less
          than full capacity, so they have headroom to ramp up quickly (spinning
          reserve).
        </p>
        <p>
          The physics of the grid dictate that - at every instant - supply must
          precisely match demand. So, any loss in PV supply must be immediately 
          replaced. These gas turbines are kept idling because they take several 
          hours to start up from cold, but they can be ramped up very quickly 
          from idle. Spinning reserve costs a lot of money and pumps
          out a lot of CO2.
        </p>
        <p>
          If National Grid had better PV forecasts, even for the next few hours,
          they could reduce the amount of spinning reserve required, and hence
          reduce emissions (by about 100,000 tonnes per year for the UK{' '}
          <a href="https://docs.google.com/document/d/1sfBJ48_hxSEH-XFrwmH0leS4rSsrBKgwzfoeoqGRPfg/edit#heading=h.m4udy6vx0t7k">
            [Reference]
          </a>
          ) and reduce costs.
        </p>
        <p>
          Electricity traders and PV farm owners will be able to use better short
          -term PV forecasts to optimise trading decisions in intra-day markets.
        </p>
        <p>
          Further, this unpredictability of PV power inhibits the investment and
          onboarding of new PV generation farms, as the local and national
          system operators are concerned about these unexpected weather events
          destabilising the grid. By providing greater predictability of PV 
          power output, we can make PV power investments lower risk for all
          stakeholders.
        </p>

        <h2>What?</h2>
        <p>
          Nowcasting is a bit of an odd term. It means "forecasting for the next
          few hours". In general, nowcasting doesn't use the hugely complex and
          computationally-expensive numerical weather models that run on
          supercomputers and constitute the bread-and-butter for most
          forecasting agencies. Instead, nowcasting usually uses statistical or
          machine learning techniques to take recent observations and roll them
          forwards.
        </p>

        <h2>How?</h2>
        <p>
          It turns out that most nowcasting research up until now has been done
          on rainfall (because predicting floods saves lives and property).
          Relatively little research has been done on nowcasting sunlight.
        </p>
        <p>
          Our main interest is in trying to build machine learning models to
          forecast solar PV (which basically boils down to trying to predict the
          movement and evolution of clouds). We will spend the majority of
          the next year or two writing code to experiment with new ways to
          predict sunlight for the next few hours. Inputs to the model may
          include satellite images of clouds, numerical weather predictions,
          vertical cloud profiles, and geographical information. We will utilize
          the team’s experience in Machine Learning as well as contributors from
          the open source community to accelerate progress.
        </p>
        <p>
          As quickly as possible, we'd like to get early-stage prototype PV
          forecasts used displayed in the National Grid control room, to
          validate our model’s effectiveness and so we can start measuring the
          impact on emissions and cost.  Beyond that we will release a
          nowcasting product for general market consumption.
        </p>
      </div>
      <h2 className="mt-16">Project Partners</h2>
      <LogoCloud
        logos={[
          {
            name: 'ESA Business Applications',
            image: 'esa_space_solutions.png',
            link: 'https://business.esa.int/',
          },
        ]}
      />
      <div className="markdown">
        <p>
          <a href="https://business.esa.int/">ESA Business Applications</a> aims
          to show that space is open for business and has the power to improve
          our everyday lives on Earth. They do this by helping companies to
          integrate space data and technology into commercial services.
        </p>
        <p>
          ESA awarded us an AI Kick-Start co-funding for six months. Kick-Start
          activities are compact Feasability Studies to explore new service
          concepts that use space tech. We will ask potential users of
          forecasting what they need; and how best to serve those needs.
        </p>
      </div>

      <h2 className="mt-16">Updates</h2>
      <PostList posts={edges} />
    </Layout>
  );
};

NowcastingPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ),
    }).isRequired,
  }).isRequired,
};

export default NowcastingPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { project: { eq: "nowcasting" } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            authorName
            authorImage
            coverImageUnsplashId
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;
