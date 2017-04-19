import React, { Component } from 'react';
import NotePreview from './NotePreview';

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.selectedClass = this.selectedClass.bind(this);
  }

  render() {
    let notes = this.props.notes;

    return (
      <aside className="note-list">
        <h2 className="note-list__title">Notes</h2>
        <div className="note-list__summary">
          <span>{notes.length}</span>
          <span> </span>
          <span>notes</span>
        </div>
        <ul className="note-list__container">
          {
            notes.map(function(note, index){
              return (
                <li onClick={() => this.props.selectNote(note)} className={"note-preview " + this.selectedClass(note)}>
                  <NotePreview {...note}/>
                </li>
              );
            }, this)
          }
        </ul>
      </aside>
    );
  }

  selectedClass(note) {
    return (note.id === this.props.selectedNote.id) ? "is-selected" : ""
  }
}
