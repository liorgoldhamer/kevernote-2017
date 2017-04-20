import React, { Component } from 'react';

export default class NoteView extends Component {
  constructor(props) {
    super(props);

    this.editNote = this.editNote.bind(this);
  }

  editNote(id, key, value) {
    clearTimeout(this.timeoutIdentifier);
    this.props.updateNoteProperty(id, key, value);

    this.timeoutIdentifier = setTimeout(() => this.props.saveNote(this.props.note), 2000);
  }

  render() {
    const {id, title, body} = this.props.note;

    return (
      <article className="note-view">
        <nav className="note-view__actions">
          <button className="note-view__actions__trash" onClick={() => this.props.deleteNote(id)}></button>
          <span className="note-view__actions__status">{this.props.status}</span>
        </nav>
        <input className="note-view__title" value={title} onChange={(event) => this.editNote(id, "title", event.target.value)}/>
        <textarea className="note-view__body" value={body} onChange={(event) => this.editNote(id, "body", event.target.value)}></textarea>
      </article>
    );
  }
}
