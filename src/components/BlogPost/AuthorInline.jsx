import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorDateBlock({ name, twitter, date, image }) {
  console.log(image);
  return (
    <div className="mt-4 text-sm text-gray mb-12 flex">
      <img className="w-12 h-12 rounded-full mr-3" src={image} />
      <div>
        <div>{name}</div>
        <div className="text-gray-600">
          {date}
          {twitter && (
            <>
              {' · '}
              <a
                className="text-blue-600"
                href={`https://twitter.com/${twitter}`}
              >
                @{twitter}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

AuthorDateBlock.propTypes = {
  name: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

AuthorDateBlock.defaultProps = {
  twitter: 'openclimatefix',
};
