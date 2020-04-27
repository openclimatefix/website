/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

import SEO from '../seo';
import Layout from '../Layout';

import AuthorDateBlock from './AuthorInline';
import PostNavigation from './PostNavigation';

export default function BlogPost({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { prev, next } = pageContext;
  const {
    markdownRemark: { frontmatter, html },
  } = data;
  const {
    authorName,
    authorTwitter,
    authorImage,
    path,
    title,
    date,
    coverImageUnsplashId,
    coverImagePhotographerName,
  } = frontmatter;

  return (
    <Layout>
      <SEO title={`Blog: ${title}`} />
      <article className="">
        <h1>{title}</h1>
        <AuthorDateBlock
          name={authorName}
          twitter={authorTwitter}
          date={date}
          image={authorImage}
        />
        <figure className="mb-4">
            <img
              style={{maxHeight: "24rem"}}
              className="object-cover w-full"
              src={`https://source.unsplash.com/${coverImageUnsplashId}/624x384`}
              alt='Blog Post Cover Image'
            />
            <figcaption className="text-xs text-gray-600 text-center mt-1">
              Photo by <a className="underline" href={`https://unsplash.com/photos/${coverImageUnsplashId}`}>{coverImagePhotographerName}</a> on <a className="underline" href="https://unsplash.com/">Unsplash</a>
            </figcaption>
        </figure>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <PostNavigation prev={prev} next={next} />
      <DiscussionEmbed
        shortname="open-climate-fix"
        config={{ identifier: path, title }}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        authorName
        authorTwitter
        authorImage
        coverImageUnsplashId
        coverImagePhotographerName
      }
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        authorTwitter: PropTypes.string,
        authorImage: PropTypes.string.isRequired,
        coverImageUnsplashId: PropTypes.string.isRequired,
        coverImagePhotographerName: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    next: PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
