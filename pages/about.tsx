import React from "react";
import { NextPage } from "next";

import Image from "next/image";
import Contributors from "../components/contributors";
import Layout from "../components/layout";

import aboutBackground from "../public/backgrounds/clouds.jpg";
import jackImage from "../public/people/jack.png";
import danImage from "../public/people/dan.jpg";
import floImage from "../public/people/flo.jpg";
import jacobImage from "../public/people/jacob.jpg";
import peterImage from "../public/people/peter.jpg";
import kasiaImage from "../public/people/peter.jpg"; //TODO: fixme

interface IPerson {
  name: string;
  role: string;
  image: StaticImageData;
  twitterUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

const AboutUsPage: NextPage = () => {
  const people: IPerson[] = [
    {
      name: "Jack Kelly",
      role: "Co-Founder",
      image: jackImage,
      twitterUrl: "https://twitter.com/jack_kelly",
      linkedinUrl: "https://www.linkedin.com/in/jackkelly0/",
      githubUrl: "https://github.com/JackKelly",
    },
    {
      name: "Dan Travers",
      role: "Co-Founder",
      image: danImage,
      linkedinUrl: "https://www.linkedin.com/in/dan-travers-56982912/",
      twitterUrl: "https://twitter.com/danieltravers",
    },
    {
      name: "Flo Wirtz",
      role: "Co-Founder",
      image: floImage,
      linkedinUrl: "https://www.linkedin.com/in/florianwirtz/",
      twitterUrl: "https://twitter.com/flowirtz",
      githubUrl: "https://github.com/flowirtz",
    },
    {
      name: "Jacob Bieker",
      role: "ML Research Engineer",
      image: jacobImage,
      linkedinUrl: "https://www.linkedin.com/in/jacobbieker/",
      twitterUrl: "https://twitter.com/JacobBieker",
      githubUrl: "https://github.com/jacobbieker",
    },
    {
      name: "Peter Dudfield",
      role: "ML Research Engineer",
      image: peterImage,
      linkedinUrl: "https://www.linkedin.com/in/peter-dudfield-b379b7a6/",
      githubUrl: "https://github.com/peterdudfield",
    },
    {
      name: "Kasia Krasucka",
      role: "Program Manager",
      image: kasiaImage,
      linkedinUrl: "https://www.linkedin.com/in/krasucka/",
      githubUrl: "https://github.com/kasiaocf",
    },
  ];

  return (
    <Layout
      bgImage={aboutBackground}
      title="About Us"
      teaserText="Open Climate Fix is a non-profit product lab, totally focused on reducing greenhouse gas emissions as rapidly as possible."
      description="Open Climate Fix is a non-profit product lab, totally focused on reducing greenhouse gas emissions as rapidly as possible."
      isTextPage={false}
    >
      <article className="mx-auto mt-10 mb-20 prose">
        <p>
          Every part of the organisation is designed to maximise climate impact,
          such as our open and collaborative approach, our rapid prototyping,
          and our attention on finding scalable &amp; practical solutions.
        </p>
        <p>
          By using an open-source approach, we can draw upon a much larger pool
          of expertise than any individual company, so combining existing
          islands of knowledge and accelerating progress.
        </p>
        <p>
          Our approach is to search for ML (Machine Learning) problems where, if
          we solve a well-defined ML task, then there is likely to be a large
          climate impact. Then, for each of these challenges, we will:
        </p>
        <ol>
          <li>
            <strong>Collate &amp; release data</strong>, and write software
            tools to make it super-easy for people to consume this data.
          </li>
          <li>
            <strong>Run a collaborative “global research project”</strong>
            where everyone from 16-year-olds to PhD students to corporate
            research labs can help solve the ML task.
          </li>
          <li>
            <strong>Help to put good solutions into production</strong>, once
            the community has developed them, so we can be reducing emissions
            ASAP.
          </li>
        </ol>
      </article>
      <ul
        role="list"
        className="grid max-w-2xl grid-cols-2 mx-auto space-y-0 gap-x-6 gap-y-12 lg:grid-cols-3 lg:gap-x-8"
      >
        {people.map(
          ({ name, role, image, twitterUrl, linkedinUrl, githubUrl }) => (
            <li key={name}>
              <div className="space-y-4">
                <div className="aspect-w-4 aspect-h-5">
                  <Image
                    src={image}
                    className="rounded-lg shadow-lg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="space-y-2">
                  <div className="mb-2 space-y-1 text-lg font-medium leading-6">
                    <h3 className="mb-2 text-3xl font-light">{name}</h3>
                    <p className="block text-sm uppercase">{role}</p>
                  </div>
                  <ul role="list" className="flex space-x-4">
                    <li>
                      <a
                        href={linkedinUrl}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    {twitterUrl && (
                      <li>
                        <a
                          href={twitterUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                    )}
                    {githubUrl && (
                      <li>
                        <a
                          href={githubUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">GitHub</span>
                          <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
      <div className="max-w-2xl mx-auto mt-32">
        <Contributors />
        <article className="mt-12 prose ">
          <h3 className="text-center">Contribute</h3>
          <p>
            These wonderful people above are already contributing to our
            codebase. Want to join them? Check out these resources:
          </p>
          <ol className="">
            <li>
              <a href="https://github.com/search?l=&p=1&q=user%3Aopenclimatefix+label%3A%22good+first+issue%22&ref=advsearch&type=Issues&utf8=%E2%9C%93&state=open">
                List of &quot;good first issues&quot;
              </a>
              : GitHub &quot;issues&quot; which describe changes we&apos;d like
              to make to the code.
            </li>
            <li>
              <a href="https://github.com/openclimatefix/nowcasting/blob/main/coding_style.md">
                OCF&apos;s Coding Style
              </a>
            </li>
            <li>
              The main tools we use include: PyTorch, PyTorch Lighting, xarray,
              pandas, pvlib, Next.js
            </li>
          </ol>
        </article>
      </div>
    </Layout>
  );
};

export default AboutUsPage;
