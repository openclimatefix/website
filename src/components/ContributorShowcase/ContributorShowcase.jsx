import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import styles from './ContributorShowcase.module.css';

function getContributors(data) {
  const cont = [];
  data.contributorsJson.contributors.forEach((item) => {
    cont.push(
      <div className={styles.griditem} key={item.name}>
        <img className={styles.image} alt={item.profile} src={item.avatar_url} />
        <a href={item.profile}>{item.name}</a>
      </div>,
    );
  });
  return cont;
}

function ContributorShowcase() {
  return (
    <div>
      <h2>Contributors</h2>
      <br />
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
        render={(data) => <div className={styles.grid}>{getContributors(data)}</div>}
      />
    </div>
  );
}
export default ContributorShowcase;
