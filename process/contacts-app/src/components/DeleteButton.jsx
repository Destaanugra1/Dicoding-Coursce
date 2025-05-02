import PropTypes from 'prop-types';
import React from 'react';
import { FiDelete } from 'react-icons/fi';

function DeleteButton({ id, onDelete }) {
  return <button className='contact-item__delete' onClick={() => onDelete(id)}><FiDelete /></button>
}

DeleteButton.proptypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;