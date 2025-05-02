import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiDelete } from 'react-icons/fi';

function NoteItem({ id, title, body, createdAt, onDelete }) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h3 className="text-lg font-semibold">
        <Link to={`/notes/${id}`} className="text-blue-600 hover:underline">
          {title}
        </Link>
      </h3>
      <small className="text-gray-500">{new Date(createdAt).toLocaleString()}</small>
      <p className="mt-2">{body}</p>
      <button
        onClick={() => onDelete(id)}
        className="mt-2 text-sm text-red-500 hover:underline"
      >
        <FiDelete />
      </button>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
