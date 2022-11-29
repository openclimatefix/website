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
    markdownRemark: { frontmatter, excerpt, html },
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
    coverImageSourceTitle,
    coverImageSourceLink
  } = frontmatter;

  const isUploadedImage = coverImageUnsplashId.slice(0,3) === '202';
  const coverImageUrl = isUploadedImage ? `/images/blog/${coverImageUnsplashId}` : `https://source.unsplash.com/${coverImageUnsplashId}/624x384`;
  const coverImageSourceUrl = isUploadedImage ? coverImageSourceLink : `https://unsplash.com/photos/${coverImageUnsplashId}`

  return (
    <Layout>
      <SEO
        title={title}
        imageUrl={coverImageUrl}
        description={excerpt}
        authorTwitter={authorTwitter}
      />
      <article className="px-6 container mx-auto md:max-w-2xl lg:max-w-2xl xl:max-w-2xl mb-16">
        <h1>{title}</h1>
        <AuthorDateBlock
          name={authorName}
          twitter={authorTwitter}
          date={date}
          image={authorImage}
        />
        <figure className="mb-4">
          <img
            style={{ maxHeight: '24rem' }}
            className="object-cover w-full"
            src={coverImageUrl}
            alt="Blog Post Cover Image"
          />
          <figcaption className="text-xs text-gray-600 text-center mt-1">
            <span>Photo {coverImagePhotographerName ? "by" : "source:"} </span>
            {coverImagePhotographerName && <>
              <a
                className="underline"
                href={isUploadedImage ? coverImageSourceLink : `https://unsplash.com/photos/${coverImageUnsplashId}`}
              >
                {coverImagePhotographerName}
              </a>
            }{' '}
              on{' '}
            </>}
            <a className="underline" href={coverImageSourceUrl || coverImageUrl}>
              {isUploadedImage && !!coverImageSourceTitle ? coverImageSourceTitle : 'Unsplash'}
            </a>
          </figcaption>
        </figure>
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
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
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        authorName
        authorTwitter
        authorImage
        coverImageUnsplashId
        coverImagePhotographerName
        coverImageSourceTitle
        coverImageSourceLink
      }
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authorName: PropTypes.string.isRequired,
        authorTwitter: PropTypes.string,
        authorImage: PropTypes.string.isRequired,
        coverImageUnsplashId: PropTypes.string.isRequired,
        coverImagePhotographerName: PropTypes.string.isRequired,
        coverImageSourceTitle: PropTypes.string, // optional,
        coverImageSourceLink: PropTypes.string // optional,
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
