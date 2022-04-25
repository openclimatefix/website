import React from 'react';
import { iconList } from './teamsection.module.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// ADVISORS
{
  /* <Person
        name="Damien Tanner"
        image="damien.jpg"
        linkedin="https://www.linkedin.com/in/dctanner/"
        twitter="https://twitter.com/dctanner/"
        github="https://github.com/dctanner"
      /> */
}

export default function TeamSection() {
  return (
    <StaticQuery
      query={graphql`
        query PeopleQuery {
          allFile(filter: { relativeDirectory: { eq: "people" } }) {
            edges {
              node {
                relativePath
                childImageSharp {
                  gatsbyImageData(height: 200)
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="grid max-w-5xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          <Person
            name="Jack Kelly"
            image={getImageFromList('jack2.png', data)}
            linkedin="https://www.linkedin.com/in/jackkelly0/"
            twitter="https://twitter.com/jack_kelly"
            github="https://github.com/JackKelly"
          />
          <Person
            name="Dan Travers"
            image={getImageFromList('dan2.png', data)}
            linkedin="https://www.linkedin.com/in/dan-travers-56982912/"
            twitter="https://twitter.com/danieltravers"
          />
          <Person
            name="Flo Wirtz"
            image={getImageFromList('flo2.png', data)}
            linkedin="https://www.linkedin.com/in/florianwirtz/"
            twitter="https://twitter.com/flowirtz"
            github="https://github.com/flowirtz"
          />
          <Person
            name="Jacob Bieker"
            image={getImageFromList('jacob2.png', data)}
            linkedin="https://www.linkedin.com/in/jacobbieker/"
            github="https://github.com/jacobbieker"
            twitter="https://twitter.com/JacobBieker"
          />
          <Person
            name="Peter Dudfield"
            image={getImageFromList('peter2.png', data)}
            linkedin="https://www.linkedin.com/in/peter-dudfield-b379b7a6/"
            github="https://github.com/peterdudfield"
          />
          <Person
            name="Kasia Krasucka"
            image={getImageFromList('kasia2.png', data)}
            linkedin="https://www.linkedin.com/in/krasucka/"
            github="https://github.com/kasiaocf"
          />
        </div>
      )}
    />
  );
}

function getImageFromList(imageName, list) {
  return getImage(
    list.allFile.edges.find(({ node }) => node.relativePath.endsWith(imageName))
      .node
  );
}

function Person({ name, image, linkedin, twitter, github }) {
  const pic = getImage(image);

  return (
    <div className="p-2 mb-6 sm:max-w-xs">
      <div className="flex justify-center">
        <div className="inline-block">
          <GatsbyImage
            className="w-24 h-24 rounded-full"
            image={pic}
            alt={`Portrait picture of ${name}`}
          />
        </div>
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-lg">{name}</h3>
        <span className={iconList}>
          {linkedin && (
            <a href={linkedin} className="mr-1">
              <FaLinkedin />
            </a>
          )}
          {twitter && (
            <a href={twitter} className="mr-1">
              <FaTwitter />
            </a>
          )}
          {github && (
            <a href={github} className="mr-1">
              <FaGithub />
            </a>
          )}
        </span>
      </div>
    </div>
  );
}
