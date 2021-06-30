import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export default function LogoCloud({ logos }) {
  const LOGOS = logos || [
    {
      name: 'ESA Business Applications',
      image: 'esa_space_solutions.png',
      link: 'https://business.esa.int/',
    },
    {
      name: 'Google.org',
      image: 'google_org.png',
      link: 'https://www.google.org/',
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
                  gatsbyImageData(
                    height: 250
                    placeholder: BLURRED
                    transformOptions: {
                      grayscale: true
                    }
                  )
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 my-2">
          {LOGOS.map(({ name, image, link }) => {
            const img = getImage(
              data.allFile.edges.find(({ node }) =>
                node.relativePath.endsWith(image)
              ).node
            );

            return (
              <a
                className="col-span-1 flex justify-center"
                key={`logo-${name}`}
                href={link}
                type="button"
              >
                <GatsbyImage
                  className="h-14"
                  objectFit="contain"
                  image={img}
                  title={name}
                  alt={`Logo for ${name}`}
                />
              </a>
            );
          })}
        </div>
      )}
    />
  );
}
