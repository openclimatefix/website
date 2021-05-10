import React from 'react';

import { MdEmail } from 'react-icons/md';
import { FaTwitter, FaDonate, FaDiscourse, FaYoutube } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

import {iconList} from './footer.module.css';

export default function Footer() {
  return (
    <footer className="bg-black p-6 text-white text-center">
      <div className={iconList}>
        <a
          href="https://github.com/openclimatefix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMarkGithub />
        </a>
        <a
          href="https://twitter.com/openclimatefix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:info@openclimatefix.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail />
        </a>
        <a
          href="https://openclimatefix.discourse.group/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscourse />
        </a>
        <a
          href="https://www.youtube.com/channel/UCq2-AN_j8BMERxTqdSvtPAg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://opencollective.com/openclimatefix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDonate />
        </a>
      </div>
      <p className="mt-4"><a className="hover:underline" href="https://docs.google.com/document/d/1ld-faFUnXpOmxXcxI8cxpH_S6NHnpQEzqQrYe6Y6Sjg/edit?usp=sharing">Privacy Notice</a></p>
      <p className="mt-4">&copy; Open Climate Fix Ltd.</p>
    </footer>
  );
}
