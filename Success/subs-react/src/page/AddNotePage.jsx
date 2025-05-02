import React from 'react';
import NoteForm from '../components/NoteForm';
import { addNote } from '../utils/index';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function AddNotePageWrapper() {
  const navigate = useNavigate();
  return <AddNotePage navigate={navigate} />;
}

class AddNotePage extends React.Component {
  constructor(props) {
    super(props);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onAddNoteHandler(note) {
    addNote(note);
    this.props.navigate('/');
  }

  render() {
    return (
      <section>
        <h2 className='text-xl font-bold mb-4'>Tambah Catatan Baru</h2>
        <NoteForm addNote={this.onAddNoteHandler} />
      </section>
    );
  }
}

AddNotePage.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default AddNotePageWrapper;
