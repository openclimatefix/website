import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import {griditem, grid, image} from './ContributorShowcase.module.css';

function renderContributorsFromData(data) {
  const cont = [];
  data.contributorsJson.contributors.forEach(item => {
    cont.push(
      <div className={griditem} key={item.profile}>
        <img
          className={image}
          alt={item.profile}
          src={item.avatar_url}
        />
        <a href={item.profile}>{item.name}</a>
      </div>
    );
  });
  return cont;
}

function ContributorShowcase() {
  return (
    <>
      <h2>Contributors</h2>
      <p>
        Join our amazing group of contributors and get involved.
        <br />
        These people are already contributing to our work.
      </p>
      <StaticQuery
        query={graphql`
          query queryJSON {
            contributorsJson {
              contributors {
                name
                profile
                avatar_url
              }
            }
          }
        `}
        render={data => (
          <div className={grid}>{renderContributorsFromData(data)}</div>
        )}
      />
    </>
  );
}
export default ContributorShowcase;
