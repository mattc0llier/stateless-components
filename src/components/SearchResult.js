import React from 'react';
import PropTypes from 'prop-types';

function SearchResult({ result, playVideo }) {
  const { snippet } = result;
  const { videoId } = result.id;
  const { description, title, thumbnails } = snippet;
  const { height, width, url } = thumbnails.default;
  return (
    <li
      className="result-item"
      onClick={event => {
        playVideo(videoId);
      }}
    >
      <img className="result-img" src={url} height={height} width={width} />
      <div className="result-description">
        <div>
          <strong>{title}</strong>
        </div>
        {description}
      </div>
    </li>
  );
}

SearchResult.propTypes = {
  result: PropTypes.object,
  playVideo: PropTypes.func
};

export default SearchResult;
