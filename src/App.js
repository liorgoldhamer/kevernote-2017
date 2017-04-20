import React, { Component } from 'react';
import ActionBar from './ActionBar';
import NoteList from './NoteList';
import NoteView from './NoteView';
import api from './api';
import isEmpty from 'ramda/src/isEmpty'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.selectNote = this.selectNote.bind(this);
    this.updateNoteProperty = this.updateNoteProperty.bind(this);
    this.addNewNote = this.addNewNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.saveNote = this.saveNote.bind(this);

    this.state = {
      notes: [],
      selectedNote: {}
    }
    api.notes.all().then(notes => this.setNotes(notes));
  }

  setNotes(notes) {
    var currentState = this.state;
    currentState.notes = notes;
    currentState.selectedNote = (notes.length > 0) ? notes[0] : {}
    this.setState(currentState);
  }

  selectNote(note) {
    let currentState = this.state;
    currentState.selectedNote = note;
    currentState.selectedNoteStatus = "Saved";

    this.setState(currentState);
  }

  addNewNote() {
    let notes = this.state.notes;
    let id = (notes.length > 0) ? notes[0].id + 1 : 1
    let note = {id: id, title: "New Note", body: "Write your note here", createdAt: Date()};
    api.notes.create(note);

    notes.unshift(note);

    let currentState = this.state;
    currentState.notes = notes;
    currentState.selectedNote = note;

    this.setState(currentState);
  }

  deleteNote(id) {
    let currentState = this.state;
    let notes = currentState.notes;
    let noteIndex;

    notes.map(function(note, index){
      if (note.id === id) {
        noteIndex = index;
      }
    })

    notes.splice(noteIndex, 1);
    api.notes.delete(id);
    let selectedNote = (notes.length > 0) ? notes[0] : {}
    this.selectNote(selectedNote);

    this.setState(currentState);
  }

  updateNoteProperty(id, key, value) {
    let currentState = this.state;
    this.updateStatus('Editing');

    currentState.selectedNote[key] = value;
    currentState.notes.map(function(note, index){
      if (note.id === id) {
        note[key] = value;
      }
    });

    this.setState(currentState);
  }

  saveNote(note) {
    this.updateStatus('Saving...');

    api.notes.update(note.id, note).then(() => this.updateStatus('Saved'));
  }

  updateStatus(status) {
    let currentState = this.state;
    currentState.selectedNoteStatus = status;

    this.setState(currentState);
  }

  render() {
    let noteView = null;
    if (!isEmpty(this.state.selectedNote)) {
      noteView = <NoteView status={this.state.selectedNoteStatus} note={this.state.selectedNote} updateNoteProperty={this.updateNoteProperty} deleteNote={this.deleteNote} saveNote={this.saveNote}/>;
    }

    return (
      <div className="app">
        <ActionBar addNewNote={this.addNewNote}/>
        <NoteList notes={this.state.notes} selectedNote={this.state.selectedNote} selectNote={this.selectNote}/>
        {noteView}
      </div>
    );
  }
}
