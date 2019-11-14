import React from 'react';

import styles from './ContributorShowcase.module.css';
import {StaticQuery, graphql} from 'gatsby';

function ContributorShowcase() {
  return (
    <div className={styles.cs}>
      hello World!
      <StaticQuery 
      query = {graphql`
        query queryJSON {
          allContributorsJson {
            edges {
              node {
                name
                avatar_url
                profile
              }
            }
          }
        }
      `}
      render={data => {
        <div className={styles.row}>
          
        </div>
        }
      }
    
    />
    </div>
  );
} 


function getContributors(data) {
  
}
export default ContributorShowcase;
