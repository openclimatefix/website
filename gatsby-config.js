module.exports = {
  siteMetadata: {
    title: 'Open Climate Fix',
    description:
      'Open Climate Fix is a new non-profit research and development lab, totally focused on reducing greenhouse gas emissions as rapidly as possible. Every part of the organisation is designed to maximise climate impact, such as our open and collaborative approach, our rapid prototyping, and our attention on finding scalable & practical solutions.',
    author: '@openclimatefix',
    siteUrl: 'https://openclimatefix.org',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              removeAccents: true,
            }
          },
          {
            resolve: 'gatsby-remark-acronyms',
            options: {
              acronyms: {
                PV: 'Photovoltaics',
                CO2: 'Carbon dioxide',
                CO2e: 'Carbon dioxide equivalent',
                ML: 'Machine Learning',
                UK: 'United Kingdom',
                OSM: 'Open Street Map',
                TSO: 'Transmission System Operator',
                ESO: 'Electricity System Operator',
                DNO: 'Distribution System Operators',
                MPAN: 'Meter Point Administration Number',
                EV: 'Electric Vehicle',
                EO: 'Earth Observation',
                NWP: 'Numerical Weather Prediction',
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Open Climate Fix',
        short_name: 'OCF',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        icon: 'src/images/logo_dark_square@2x.png',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-144752608-1',
        head: false,
        anonymize: true, // enable ip anonymization
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge => {
                const url = `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`;

                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url,
                  guid: url,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                };
              }),
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Open Climate Fix',
          },
        ],
      },
    },
  ],
};
