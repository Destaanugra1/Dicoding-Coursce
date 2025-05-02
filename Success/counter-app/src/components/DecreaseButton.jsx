import React from 'react';
import PropTypes from 'prop-types';

DecreaseButton.propTypes = {
  decrease: PropTypes.func.isRequired,
};

function DecreaseButton({ decrease }) {
  return (
    <button className='decrease' onClick={decrease}>
      <span role="img" aria-label="minus">
        -
      </span>
    </button>
  );
}


export default DecreaseButton;