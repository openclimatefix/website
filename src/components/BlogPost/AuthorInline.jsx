import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorDateBlock({ name, twitter, date, image }) {
  if(name.includes('|') && image.includes('|')) {
    const [firstAuthor, secondAuthor] = name.split('|');
    const [firstTwitter, secondTwitter] = twitter.split('|');
    const [firstImage, secondImage] = image.split('|');
    return (
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src={firstImage}
            alt={`Avatar of author ${firstAuthor}`}
          />
          <img
            className="w-10 h-10 rounded-full mr-3 bg-gray-200 -ml-1"
            src={secondImage}
            alt={`Avatar of author ${secondAuthor}`}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{firstAuthor} & {secondAuthor}</p>
            <p className="text-gray-600">
              {date} ·&nbsp;
              <a className="text-blue-600"href={`https://twitter.com/${firstTwitter}`}>@{firstTwitter}</a>
              {secondTwitter && <>&nbsp;·&nbsp;<a className="text-blue-600" href={`https://twitter.com/${secondTwitter}`}>@{secondTwitter}</a></>}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-4 mb-6 text-sm text-gray flex items-center">
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
