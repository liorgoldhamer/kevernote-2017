import React, { Component } from 'react';
import ActionBar from './ActionBar';
import NoteList from './NoteList';
import NoteView from './NoteView';
import api from './api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.selectNote = this.selectNote.bind(this);
    this.updateNoteProperty = this.updateNoteProperty.bind(this);

    this.state = {
      notes: []
    }
    api.notes.all().then(notes => this.setNotes(notes));
  }

  setNotes(notes) {
    this.setState({ notes: notes, selectedNote: notes[0]});
  }

  selectNote(note) {
    let currentState = this.state;
    currentState.selectedNote = note;

    this.setState(currentState);
  }

  updateNoteProperty(id, key, value) {
    let currentState = this.state;
    currentState.selectedNote[key] = value;
    currentState.notes.map(function(note, index){
      if (note.id === id) {
        note[key] = value;
      }
    });

    this.setState(currentState);
  }

  render() {
    return (
      <div>
        <ActionBar/>
        <NoteList notes={this.state.notes} selectedNote={this.state.selectedNote} selectNote={this.selectNote}/>
        <NoteView {...this.state.selectedNote} updateNoteProperty={this.updateNoteProperty}/>
      </div>
    );
  }
}
