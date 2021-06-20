import app from './App'
import firebase from 'firebase';

import { firebaseConfig } from'./Configuration/config';
import appStorage from './Storage/AppStorage';
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

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const _note = {
    title: 'FIrstNNN',
    content: 'fdfsdfsdfs'
}

addFire(_note)
async function addFire(note: any) {
    const res = await db.collection('notes').add(note)
};

async function deleteNoteBy(id: string) {
    const res = await db.collection('notes').doc(id).delete();
}

async function updateNoteBy(id: string, note: any) {
    const res = await db.collection('notes').doc(id).update(note);
}

getNoteBy("KqoArpBz7HFvi2FDHvbz").then(res => console.log(res));

async function getNoteBy(id: string) {
    return db.collection('notes').doc(id).get().then(res => ({id: res.id, data: res.data()}));
}

async function getNotesCollection() {
    return db.collection('notes').get().then(res => ({size: res.size, docs: res.docs}));
}

submitButton.addEventListener('click', () => {
    let newNote = note.save(app.counter, inputTitle.value,inputText.value, "#ccae62", false);
    note.map(newNote);
    notes.notesDiv.appendChild(notes.create(newNote));
});

window.addEventListener('beforeunload', function() {
    appStorage.saveToLocalStorage(app.notes);
});

window.addEventListener('load', () => {
    app.noteLS = appStorage.getNotesFromLocalStorage();
    
    if(app.noteLS){
        app.noteLS.forEach((elem, index) => {

            app.notes[index] = app.noteLS[index];

            if(app.noteLS[index].isPinned){
                pinned.appendChild(notes.create(app.noteLS[index]));
            }else{
                notesDiv.appendChild(notes.create(app.noteLS[index]));
            }
        });
    }
});

