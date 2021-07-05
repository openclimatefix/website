import React from 'react';
import PropTypes from 'prop-types';

const PostFilters = ({ options, selected, setSelected }) => (
  <div className="mb-4">
    {[undefined, ...options].map((option) => (
      <button
        className={`mr-2 my-1 text-sm py-0 px-2 border border-black-500 rounded 
          ${
            selected === option
              ? 'bg-gray-500 text-white hover:text-black hover:bg-transparent'
              : 'bg-transparent text-black hover:text-white hover:bg-gray-500'
          }`}
        onClick={() => setSelected(option)}
      >
        {!option ? 'all posts' : option}
      </button>
    ))}
  </div>
);

PostFilters.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  setSelected: PropTypes.func.isRequired,
};

export default PostFilters;
