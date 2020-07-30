import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from '../../components/seo';
import Layout from '../../components/Layout';
import PostList from '../../components/PostList';
import LogoCloud from '../../components/LogoCloud';

const OpenEnergyPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Project: Photovoltaic Mapping" />
      <h1>Photovoltaic Mapping</h1>
      <div className="markdown">
        <figure className="mb-4">
          <img
            style={{ maxHeight: '24rem' }}
            className="object-cover w-full"
            src={'https://source.unsplash.com/d7FbDJkJSFw/624x384'}
            alt="Blog Post Cover Image"
          />
          <figcaption className="text-xs text-gray-600 text-center mt-1">
            Photo by{' '}
            <a
              className="underline"
              href={`https://unsplash.com/photos/d7FbDJkJSFw`}
            >
              Markus Spiske
            </a>{' '}
            on{' '}
            <a className="underline" href="https://unsplash.com/">
              Unsplash
            </a>
          </figcaption>
        </figure>
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
          <a href="http://web.stanford.edu/group/deepsolar/home">DeepSolar</a>{' '}
          and
          <a href="https://arxiv.org/pdf/1902.10895.pdf">
            SolarMapper from DUKE
          </a>{' '}
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
          directly in OSM. There are{' '}
          <a href="https://wiki.openstreetmap.org/wiki/Renewable_energy_in_the_United_Kingdom/Rooftop_Solar_PV">
            more details on the OSM wiki
          </a>
          .
        </p>
      </div>
      <h2 className="mt-16">Project Partners</h2>
      <LogoCloud
        logos={[
          {
            name: 'The Alan Turing Institute',
            image: 'turing.png',
            link: 'https://www.turing.ac.uk/',
          },
        ]}
      />

      <h2 className="mt-16">Updates</h2>
      <PostList posts={edges} />
    </Layout>
  );
};

OpenEnergyPage.propTypes = {
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

export default OpenEnergyPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { project: { eq: "mapping" } } }
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
