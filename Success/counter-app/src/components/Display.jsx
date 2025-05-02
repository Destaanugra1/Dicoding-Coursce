import React from 'react';
import PropTypes from 'prop-types';

Display.propTypes = {
  count: PropTypes.number.isRequired,
};

function Display({ count }) {
  return (
    <div className="Display">
      <h1>{count}</h1>
    </div>
  );
}


export default Display;
