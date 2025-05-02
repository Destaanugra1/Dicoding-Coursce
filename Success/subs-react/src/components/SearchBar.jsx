import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      className="p-2 border border-gray-300 rounded w-full mb-4"
      type="text"
      placeholder="Cari catatan..."
      value={keyword}
      onChange={(e) => keywordChange(e.target.value)}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
