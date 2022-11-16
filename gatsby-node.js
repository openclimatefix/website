/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require('gatsby-source-filesystem');
const { graphql } = require('gatsby');
const dirPath = require('path');

const fsExtra = require('fs-extra');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = dirPath.resolve(
    'src/components/BlogPost/BlogPost.jsx'
  );

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach(({ node }, index) => {
    const { path } = node.frontmatter;
    createPage({
      path,
      component: blogPostTemplate,
      context: {
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
  const sourceNorm = dirPath.normalize(`${__dirname}/src/images`);
  const destination = `/images`;

  if (node.internal.type === 'File') {
    const dir = dirPath.normalize(node.dir);

    if (dir.includes(sourceNorm)) {
      const relativeToDestination = dir.replace(sourceNorm, '');
      const newPath = dirPath.join(
        process.cwd(),
        'public',
        destination,
        relativeToDestination,
        node.base
      );

      fsExtra.copy(node.absolutePath, newPath, err => {
        if (err) {
          console.log('Error copying file: ', err)
        }
      })
    }
  }
};
