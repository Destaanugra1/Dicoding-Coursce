import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote } from '../utils';
import { FiDelete } from 'react-icons/fi';

function NoteDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <p>Catatan tidak ditemukan.</p>;
  }

  const onDelete = () => {
    deleteNote(id);
    navigate('/');
  };


  return (
    <section>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <p>{note.createdAt}</p>
      <button onClick={onDelete}><FiDelete /></button>
  
    </section>
  );
}

export default NoteDetailPage;
