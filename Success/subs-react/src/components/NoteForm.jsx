import React from 'react';
import PropTypes from 'prop-types';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  onBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    });

    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Judul"
          value={this.state.title}
          onChange={this.onTitleChange}
          required
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Isi catatan..."
          value={this.state.body}
          onChange={this.onBodyChange}
          rows="5"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Simpan
        </button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteForm;
