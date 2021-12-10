import React from "react";

import TwitterIcon from "./icons/twitter";
import GithubIcon from "./icons/github";
import YoutubeIcon from "./icons/youtube";

const navigation = {
  links: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "https://openclimatefix.homerun.co/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "mailto:info@openclimatefix.org" },
    {
      name: "Privacy",
      href: "https://docs.google.com/document/d/1ld-faFUnXpOmxXcxI8cxpH_S6NHnpQEzqQrYe6Y6Sjg/edit?usp=sharing",
    },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/openclimatefix",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <TwitterIcon {...props} />
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/openclimatefix",
      icon: (props: React.SVGProps<SVGSVGElement>) => <GithubIcon {...props} />,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCq2-AN_j8BMERxTqdSvtPAg",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <YoutubeIcon {...props} />
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ocf-black-100" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-6xl px-4 py-12 mx-auto sm:px-6 md:py-16 md:px-8">
        <div className="md:grid md:grid-cols-5 md:gap-16">
          <div className="py-10 mx-auto md:mt-0 md:mx-0 max-w-[10rem]">
            <OCFIcon fill="white" />
          </div>

          <div className="md:col-span-4 md:flex md:items-center">
            <p className="text-2xl font-thin leading-10 text-center text-white md:text-left">
              We use computers to{" "}
              <span className="inline-block border-b-2 border-yellow-400">
                reduce carbon emissions
              </span>
              .
            </p>
          </div>
        </div>
        <div className="mt-12 lg:flex lg:items-center lg:justify-between text-ocf-gray-10">
          <nav className="grid grid-cols-2 gap-4 text-center md:grid-cols-6 md:order-2">
            {navigation.links.map(({ name, href }) => (
              <a href={href} key={name}>
                {name}
              </a>
            ))}
          </nav>

          <div className="flex justify-center mt-12 space-x-6 lg:mt-0 md:order-3">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-yellow-400 hover:text-yellow-300"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>

          <p className="mt-12 text-base text-center lg:mt-0 md:order-1">
            &copy; 2021 Open Climate Fix
          </p>
        </div>
      </div>
    </footer>
  );
}

function OCFIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 208.1 69.4" {...props}>
      <path
        className="st0"
        d="M37.6,1c-1.4-1.4-3.6-1.4-5,0L1,32.6c-0.7,0.7-1,1.5-1,2.5c0,0.9,0.4,1.8,1,2.5l30.8,30.8
			c0.7,0.7,1.6,1,2.5,1s1.8-0.3,2.5-1c1.4-1.4,1.4-3.6,0-4.9L8.4,35.1L37.6,6C38.9,4.6,38.9,2.4,37.6,1z"
      />
      <path
        className="st0"
        d="M139.6,1c-1.4-1.4-3.6-1.4-4.9,0L103,32.6c-1.4,1.4-1.4,3.6,0,4.9l30.8,30.8c0.7,0.7,1.6,1,2.5,1
			s1.8-0.3,2.5-1c1.4-1.4,1.4-3.6,0-4.9l-28.3-28.3L139.6,6C140.9,4.6,140.9,2.4,139.6,1z"
      />
      <path
        className="st0"
        d="M207.1,17c-1.4-1.4-3.6-1.4-4.9,0l-18.2,18.2c-1.4,1.4-1.4,3.6,0,4.9c0.7,0.7,1.6,1,2.5,1s1.8-0.3,2.5-1
			L207.1,22C208.4,20.6,208.4,18.4,207.1,17z"
      />
      <path
        className="st0"
        d="M162,35.1L191.1,6c1.4-1.4,1.4-3.6,0-5c-1.4-1.4-3.6-1.4-4.9,0l-31.6,31.6c0,0,0,0,0,0c0,0,0,0,0,0
			c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.3-0.3,0.4c-0.1,0.1-0.1,0.2-0.1,0.2c-0.1,0.1-0.1,0.2-0.2,0.4c0,0.1-0.1,0.2-0.1,0.3
			c0,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.2,0.1,0.3
			c0,0.1,0.1,0.2,0.1,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3
			c0,0,0,0,0,0s0,0,0,0l30.9,30.8c0.7,0.7,1.6,1,2.5,1c0.9,0,1.8-0.3,2.5-1c1.4-1.4,1.4-3.6,0-4.9L162,35.1z"
      />
      <path
        className="st0"
        d="M56.3,1c-1.4-1.4-3.6-1.4-5,0c-1.4,1.4-1.4,3.6,0,5l29.1,29.1L52.1,63.4c-1.4,1.4-1.4,3.6,0,4.9
			c0.7,0.7,1.6,1,2.5,1s1.8-0.3,2.5-1l30.8-30.8c0.7-0.7,1-1.5,1-2.5c0-0.9-0.4-1.8-1-2.5L56.3,1z"
      />
    </svg>
  );
}
