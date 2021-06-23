"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const RemoteSorage_1 = require("./Storage/RemoteSorage");
const Note_1 = require("./Note/Note");
const Notes_1 = require("./Notes/Notes");
require("./Styles/reset.scss");
require("./Styles/main.scss");
const note = new Note_1.default();
const notes = new Notes_1.default();
const pinned = document.querySelector("#pinnedNotes");
const notesDiv = document.querySelector("#notes");
const inputTitle = document.querySelector("#inputTitle");
const inputText = document.querySelector("#inputText");
const submitButton = document.querySelector("#submitButton");
notes.pinnedDiv = pinned;
notes.notesDiv = notesDiv;
submitButton.addEventListener('click', () => {
    let newNote = note.getNote(App_1.default.counter, inputTitle.value, inputText.value, "#ccae62", false);
    note.map(newNote);
    notes.notesDiv.appendChild(notes.create(newNote));
    RemoteSorage_1.default.addFire(newNote);
});
window.addEventListener('load', () => {
    RemoteSorage_1.default.getNotesCollection();
});
//# sourceMappingURL=index.js.map