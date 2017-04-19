import React, { Component } from 'react';

export default class NoteView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {id, title, body} = this.props;

    return (
      <article className="note-view">
        <nav className="note-view__actions">
          <button className="note-view__actions__trash"></button>
          <span className="note-view__actions__status">Saved</span>
        </nav>
        <input className="note-view__title" value={title} onChange={(event) => this.props.updateNoteProperty(id, "title", event.target.value)}/>
        <textarea className="note-view__body" value={body} onChange={(event) => this.props.updateNoteProperty(id, "body", event.target.value)}></textarea>
      </article>
    );
  }
}