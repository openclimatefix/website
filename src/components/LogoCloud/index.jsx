import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import logocloudStyles from './logocloud.module.css';

export default function LogoCloud({ logos }) {
  const LOGOS = logos || [
    {
      name: 'ESA Business Applications',
      image: 'esa_space_solutions.png',
      link: 'https://business.esa.int/',
    },
    {
      name: 'Open Data Institute',
      image: 'odi.png',
      link: 'https://theodi.org/',
    },
    {
      name: 'The Alan Turing Institute',
      image: 'turing.png',
      link: 'https://www.turing.ac.uk/',
    },
    {
      name: 'UCL',
      image: 'UCL.jpg',
      link: 'https://www.ucl.ac.uk/',
    },
    {
      name: 'Innovate UK',
      image: 'innovateuk.png',
      link: 'https://www.gov.uk/government/organisations/innovate-uk',
    },
    {
      name: 'Machine Intelligence Garage',
      image: 'MI-Garage_Badge_cohort.png',
      link: 'https://www.migarage.ai/',
    },
    {
      name: 'The Climate Subak',
      image: 'subak.png',
      link: 'https://www.subak.org/',
    },
    {
      name: 'HAO',
      image: 'hao_black.png',
      link: 'https://haocreative.ca/',
    },
    {
      name: 'Icebreaker One',
      image: 'icebreakerOneURL.png',
      link: 'https://icebreakerone.org/',
    },
    {
      name: 'RAAIS Foundation',
      image: 'raais_foundation.png',
      link: 'https://www.raais.org/',
    },
  ];

  return (
    <StaticQuery
      query={graphql`
        query LogosQuery {
          allFile(filter: { relativeDirectory: { eq: "logos" } }) {
            edges {
              node {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                  fixed(width: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className={logocloudStyles.logogrid}>
          {LOGOS.map(({ name, image, link }) => {
            const img = data.allFile.edges.find(({ node }) =>
              node.relativePath.endsWith(image)
            ).node;

            return (
              <a key={`logo-${name}`} href={link} type="button">
                <img
                  src={img.childImageSharp.fixed.src}
                  title={name}
                  alt={`Logo for ${name}`}
                  style={{ filter: 'grayscale(100%)' }}
                />
              </a>
            );
          })}
        </div>
      )}
    />
  );
}
