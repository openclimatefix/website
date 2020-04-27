import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const PostLink = ({ post: {frontmatter: {date, path, title, authorName, authorImage, coverImageUnsplashId}, excerpt} }) => (
  <li className="list-none mb-4">
    <Link to={path}>
      <div className="max-w-md w-full sm:max-w-full sm:flex">
        <img
          className="h-48 w-full sm:h-auto sm:w-48 flex-none bg-cover rounded-t sm:rounded-t-none sm:rounded-l object-cover"
          src={`https://source.unsplash.com/${coverImageUnsplashId}/400x250`}
        />
        <div className="border-r border-b border-l border-gray-400 sm:border-l-0 sm:border-t sm:border-gray-400 bg-white rounded-b sm:rounded-b-none sm:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{excerpt}</p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={authorImage} alt={`Avatar of author ${authorName}`} />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{authorName}</p>
              <p className="text-gray-600">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </li>
);

PostLink.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      authorImage: PropTypes.string.isRequired,
      coverImageUnsplashId: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
};

export default PostLink;
