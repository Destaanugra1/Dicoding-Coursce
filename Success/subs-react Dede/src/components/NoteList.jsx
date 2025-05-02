import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return <p className='text-center text-gray-500'>Tidak ada catatan</p>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {notes.map((note) => (
        <div
          key={note.id}
          className='bg-black rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow'>
          <NoteItem {...note} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteList;
