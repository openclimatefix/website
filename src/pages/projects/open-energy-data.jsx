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
      <SEO title="Project: Open Energy Data" />
      <h1>Open Energy Data</h1>
      <div className="prose">
        <figure className="mb-4">
          <img
            style={{ maxHeight: '24rem' }}
            className="object-cover w-full"
            src={'https://source.unsplash.com/_SFJhRPzJHs/624x384'}
            alt="Blog Post Cover Image"
          />
          <figcaption className="text-xs text-gray-600 text-center mt-1">
            Photo by{' '}
            <a
              className="underline"
              href={`https://unsplash.com/photos/_SFJhRPzJHs`}
            >
              NASA
            </a>{' '}
            on{' '}
            <a className="underline" href="https://unsplash.com/">
              Unsplash
            </a>
          </figcaption>
        </figure>
        <h2>Why?</h2>
        <p>
          We are facing the huge challenge of decarbonizing our electricity
          grid. The good news is that we're making amazing progress installing
          renewable generation and batteries and flexing demand. But these
          millions of diverse, distributed systems must work together by
          communicating in the same language. The bad news is that today, these
          systems speak wildly different languages, and so it's very hard for
          these systems to work together.
        </p>
        <p>
          Sharing data in the energy system will reduce costs, lower the barrier
          to entry for innovators, and - the bit that we at Open Climate Fix are
          most passionate about - help achieve net-zero emissions{' '}
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
          crucially,{' '}
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
          for historical reasons. What's really needed today? How can we make
          these standards as easy-to-use as possible, whilst significantly
          improving the system?
        </p>
        <p>
          We can also make life easier by glueing together existing parts,
          rather than reinventing the wheel.
        </p>
      </div>
      <h2 className="mt-16">Project Partners</h2>
      <LogoCloud
        logos={[
          {
            name: 'Open Data Institute',
            image: 'odi.png',
            link: 'https://theodi.org/',
          },
          {
            name: 'Icebreaker One',
            image: 'icebreakerOneURL.png',
            link: 'https://icebreakerone.org/',
          },
        ]}
      />
      <div className="prose">
        <p>
          We have worked with{' '}
          <a href="https://icebreakerone.org/">Icebreaker One</a> on a proposal
          for how to support opening up energy data with legal and data
          permissions structures. We are now focussed on opening up additional
          PV data - both the metadata to describe systems, and the historical
          generation data as a use-case which will serve as a really focussed
          example for sharing energy data more generally, and one that supports
          our other work. We are lucky enough to be supported by the{' '}
          <a href="https://theodi.org/">Open Data Institute</a> in this
          endeavour.
        </p>
      </div>

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
      filter: { frontmatter: { project: { eq: "open-energy" } } }
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
