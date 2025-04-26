import React from 'react';
import PropTypes from 'prop-types';

IncreaseButton.propTypes = {
  increase: PropTypes.func.isRequired,
};

function IncreaseButton({ increase }) {
  return (
    <button className='increase' onClick={increase}>
      <span role="img" aria-label="plus">
        +
      </span>
    </button>
  );
}



export default IncreaseButton;