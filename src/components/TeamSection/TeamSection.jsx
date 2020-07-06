import React from 'react';
import teamsectionStyles from './teamsection.module.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function TeamSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl">
      <TeamMember
        name="Jack Kelly"
        image="https://raw.githubusercontent.com/openclimatefix/website/master/src/images/people/jack.png"
        linkedin="https://www.linkedin.com/in/jackkelly0/"
        twitter="https://twitter.com/jack_kelly"
        github="https://github.com/JackKelly"
      />
      <TeamMember
        name="Dan Travers"
        image="https://raw.githubusercontent.com/openclimatefix/website/master/src/images/people/dan.jpg"
        linkedin="https://www.linkedin.com/in/dan-travers-56982912/"
        twitter="https://twitter.com/danieltravers"
      />
      <TeamMember
        name="Damien Tanner"
        image="https://raw.githubusercontent.com/openclimatefix/website/master/src/images/people/damien.jpg"
        linkedin="https://www.linkedin.com/in/dctanner/"
        twitter="https://twitter.com/dctanner/"
        github="https://github.com/dctanner"
      />
      <TeamMember
        name="Flo Wirtz"
        image="https://raw.githubusercontent.com/openclimatefix/website/master/src/images/people/flo.jpg"
        linkedin="https://www.linkedin.com/in/florianwirtz/"
        twitter="https://twitter.com/flowirtz"
        github="https://github.com/FWirtz"
      />
    </div>
  );
}

function TeamMember({ name, image, linkedin, twitter, github }) {
  return (
    <div className="sm:max-w-xs bg-white p-2 mb-6">
      <img className="w-24 h-24 rounded-full mx-auto" src={image} />
      <div className="text-center mt-3">
        <h3 className="text-lg">{name}</h3>
        <span className={teamsectionStyles.iconList}>
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
