import React from 'react';
import teamsectionStyles from './teamsection.module.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function TeamSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl">
      <TeamMember
        name="Jack Kelly"
        image="https://pbs.twimg.com/profile_images/1101483049827614722/TioU1lZ3_400x400.png"
        linkedin="https://www.linkedin.com/in/jackkelly0/"
        twitter="https://twitter.com/jack_kelly"
        github="https://github.com/JackKelly"
      />
      <TeamMember
        name="Dan Travers"
        image="https://pbs.twimg.com/profile_images/1147128036619444225/-Uerkl_1_400x400.jpg"
        linkedin="https://www.linkedin.com/in/dan-travers-56982912/"
        twitter="https://twitter.com/danieltravers"
      />
      <TeamMember
        name="Flo Wirtz"
        image="https://media-exp1.licdn.com/dms/image/C5603AQGCaDwubr4d_A/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=G7zbnXmJx3WpiTv9jDuaFofnmpYakQAHByAnc9jdkAM"
        linkedin="https://www.linkedin.com/in/florianwirtz/"
        twitter="https://twitter.com/flowirtz"
        github="https://github.com/FWirtz"
      />
      <TeamMember
        name="Damien Tanner"
        image="https://pbs.twimg.com/profile_images/1068478549714247680/1ErTdUuj_400x400.jpg"
        linkedin="https://www.linkedin.com/in/dctanner/"
        twitter="https://twitter.com/dctanner/"
        github="https://github.com/dctanner"
      />
    </div>
  );
}

function TeamMember({ name, image, linkedin, twitter, github }) {
  return (
    <div class="sm:max-w-xs bg-white p-2 mb-6">
      <img class="w-24 h-24 rounded-full mx-auto" src={image} />
      <div class="text-center mt-3">
        <h3 class="text-lg">{name}</h3>
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
