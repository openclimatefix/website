import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import PostLink from './PostLink';
import PostFilters from './PostFilters';

const PostList = ({ posts }) => {
  const [projectFilter, setProjectFilter] = useState();

  const projects = useMemo(
    () =>
      posts.reduce((acc, { node: post }) => {
        const { project } = post.frontmatter;
        return !!project && !acc.includes(project) ? [...acc, project] : acc;
      }, []),
    [posts]
  );

  return (
    <div className="mt-6">
      <PostFilters
        options={projects}
        selected={projectFilter}
        setSelected={setProjectFilter}
      />
      <ul>
        {posts
          .filter(
            ({ node: post }) =>
              !projectFilter || projectFilter === post.frontmatter.project
          )
          .map(({ node: post }) => (
            <PostLink key={post.id} post={post} />
          ))}
      </ul>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        frontmatter: {
          project: PropTypes.string,
        },
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default PostList;
