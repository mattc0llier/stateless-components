import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ handleSubmit, handleChange }) {
  return (
    <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        placeholder="Search..."
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

export default SearchBar;
