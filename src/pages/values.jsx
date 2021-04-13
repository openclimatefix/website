import React from 'react';
import Layout from '../components/Layout';

const valuesPage = () => (
  <Layout>
    <h1 className="mt-16 mb-2">
      Our Values
    </h1>
    <figure className="mb-4">
        <img
        style={{ maxHeight: '24rem' }}
        className="object-cover w-full"
        src="https://source.unsplash.com/-1INkIz-PVA/624x384"
        alt="Values Cover Image"
        />
        <figcaption className="text-xs text-gray-600 text-center mt-1">
        Photo by{' '}
        <a
            className="underline"
            href="https://source.unsplash.com/-1INkIz-PVA"
        >
            Sean Stratton
        </a>{' '}
        on{' '}
        <a className="underline" href="https://unsplash.com/">
            Unsplash
        </a>
        </figcaption>
    </figure>
    <div className="prose">
      <p>
      All of our values here at Open Climate Fix can be linked back to one word: Sustainability. Let’s start with the obvious: Environmental Sustainability. We are terrified by climate change and want to act on this immediately. Every single project here at OCF begins with the question “How can we use technology to mitigate the effects of climate change?”.
      </p>
      <p>
      Next up: Organisational Sustainability. The problem we are working on is a big one, so it’s important to remember that our work is a marathon, not a sprint. Sure, we could work night and day and just stop sleeping. That probably wouldn’t go well for long though, so we decided to be a calm company. A workweek is 40 hours, not 60, not 80. Work-life balance is essential. Salaries shouldn’t depend on negotiating skills, but on the work that’s being done: equal work, equal pay. We don’t want to be a unicorn, but rather a Zebra: Improve society as a whole, not just shareholders' bank accounts (as a nonprofit, we don't have any shareholders!).
      </p>
      <p>
      And third: Economic Sustainability. Our ultimate goal is climate impact, not financial gain. That’s why we are a nonprofit organisation. We also favour collaboration over competition, and so far, the nonprofit status has helped us open many doors to data, collaborators and partners. Many nonprofits live on donations. We don’t believe that’s very sustainable. We want the majority of our revenue to come from the products and services we provide. That diversifies our revenues away from constant fundraising, increasing our economic sustainability. Building products “keeps us honest” by ensuring that we get real-world feedback on how useful our work is and takes research into production, delivering tangible impact.
      </p>
      <p>
      At Open Climate Fix, we value collaboration over competition, and we are strongly committed to enabling the wider community to be effective. We believe that open-source is the best catalyst for that and as such, all of our work is done in the open.
      </p>
    </div>
  </Layout>
);

export default valuesPage;
