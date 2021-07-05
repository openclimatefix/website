import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Blog" />
    <div className="px-6 container mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mb-16">
      <h1>Blog</h1>
      <p>
        One of our biggest goals at Open Climate Fix is transparency. We want to
        let people take part in the work we do and we think that is only
        possible by openly communicating about it. This blog is one part of how
        we want to achieve that.
      </p>
      <PostList posts={edges} />
    </div>
  </Layout>
);

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
            }).isRequired,
          }),
        }).isRequired
      ),
    }),
  }).isRequired,
};

export default BlogPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            authorName
            authorImage
            coverImageUnsplashId
            project
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;
