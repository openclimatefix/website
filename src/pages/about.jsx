import React from 'react';
import Layout from '../components/Layout';

const aboutPage = () => (
  <Layout>
    <h1 className="mt-16 mb-2">
      About
    </h1>
    <figure className="mb-4">
        <img
        style={{ maxHeight: '24rem' }}
        className="object-cover w-full"
        src="https://source.unsplash.com/jFCViYFYcus/624x384"
        alt="Values Cover Image"
        />
        <figcaption className="text-xs text-gray-600 text-center mt-1">
        Photo by{' '}
        <a
            className="underline"
            href="https://source.unsplash.com/jFCViYFYcus"
        >
            Lukasz Szmigiel
        </a>{' '}
        on{' '}
        <a className="underline" href="https://unsplash.com/">
            Unsplash
        </a>
        </figcaption>
    </figure>
    <div className="prose">
        <p>
          Open Climate Fix is a new non-profit research and development lab,
          totally focused on reducing greenhouse gas emissions as rapidly as
          possible. Every part of the organisation is designed to maximise
          climate impact, such as our open and collaborative approach, our rapid
          prototyping, and our attention on finding scalable &amp; practical
          solutions.
        </p>
        <p>
          By using an open-source approach, we can draw upon a much larger pool
          of expertise than any individual company, so combining existing 
          islands of knowledge and accelerating progress.
        </p>
        <p>
          Our approach is to search for ML (Machine Learning) problems
          where, if we solve a well-defined ML task, then there is likely to be
          a large climate impact. Then, for each of these challenges, we will:
        </p>
        <ol>
          <li>
            <strong>Collate &amp; release data</strong>, and write software
            tools to make it super-easy for people to consume this data.
          </li>
          <li>
            <strong>
              Run a collaborative &ldquo;global research project&rdquo;
            </strong>{' '}
            where everyone from 16-year-olds to PhD students to corporate
            research labs can help solve the ML task.
          </li>
          <li>
            <strong>Help to put good solutions into production</strong>, once
            the community has developed them, so we can be reducing emissions
            ASAP.
          </li>
        </ol>
      </div>
  </Layout>
);

export default aboutPage;
