import React from 'react';
import Layout from '../components/Layout';
import ContributorShowcase from '../components/ContributorShowcase';

const getInvolvedPage = () => (
  <Layout>
    <h1>Get Involved</h1>
    <div className="prose">
      <ul>
        <li>
          <a href="https://opencollective.com/openclimatefix">Donate</a> to our
          OpenCollective
        </li>
        <li>
          Follow us by{' '}
          <a href="https://eepurl.com/guCjvH">signing up to our newsletter</a>
        </li>
        <li>
          Join the{' '}
          <a href="https://openclimatefix.discourse.group/">
            OCF discussion forum
          </a>
        </li>
      </ul>
      <p>
        Also check out{' '}
        <a href="/blog/2019-03-06-how-to-get-involved">
          Jack&apos;s blog post about getting involved
        </a>
        .
      </p>
      <h2>Contribute to one of our repositories on Github</h2>
      <p>
        Check out our{' '}
        <a href="https://github.com/search?l=&p=1&q=user%3Aopenclimatefix+label%3A%22good+first+issue%22&ref=advsearch&type=Issues&utf8=%E2%9C%93&state=open">
          List of Good First Issues
        </a>{' '}
        to get started!
      </p>
      <ContributorShowcase />
    </div>
  </Layout>
);

export default getInvolvedPage;
