import app from './App'

import remoteStorage from './Storage/RemoteSorage';
import Note from './Note/Note';
import Notes from './Notes/Notes';
import './Styles/reset.scss';
import './Styles/main.scss';

const note = new Note();
const notes = new Notes();
const pinned: HTMLDivElement = document.querySelector("#pinnedNotes");
const notesDiv: HTMLDivElement = document.querySelector("#notes");
const inputTitle: HTMLInputElement = document.querySelector("#inputTitle");
const inputText: HTMLInputElement = document.querySelector("#inputText");
const submitButton: HTMLButtonElement = document.querySelector("#submitButton");
notes.pinnedDiv = pinned;
notes.notesDiv = notesDiv;

submitButton.addEventListener('click', () => {
    let newNote = note.getNote(app.counter, inputTitle.value,inputText.value, "#ccae62", false);
    note.map(newNote);
    notes.notesDiv.appendChild(notes.create(newNote));
    remoteStorage.addFire(newNote);
});

window.addEventListener('load', () => {
    remoteStorage.getNotesCollection();
});

