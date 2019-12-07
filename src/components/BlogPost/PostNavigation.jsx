import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

const PostNavigation = ({ prev, next }) => (
  <div className="flex justify-center h-24">
    { prev
          && (
            <Link to={prev.frontmatter.path}>
              <div className="flex-center items-center px-4 py-2 m-2">
                <FaCaretLeft size="20" className="inline mr-0" />
                Next
              </div>
            </Link>
          )}
    { next
          && (
            <Link to={next.frontmatter.path}>
              <div className="flex-center items-center px-4 py-2 m-2">
                Previous
                <FaCaretRight size="20" className="inline mr-0" />
              </div>
            </Link>
          )}
  </div>
);

PostNavigation.propTypes = {
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
};

export default PostNavigation;
