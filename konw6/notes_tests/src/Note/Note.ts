import app from '../App';

export class Note{

    getNote(noteId: number, noteTitle: string, noteText: string, noteBgColor: string, isNotePinned: boolean){
        let note: NoteData = {
            id: noteId,
            title: noteTitle,
            text: noteText,
            bgColor: noteBgColor,
            isPinned: isNotePinned,
            date: (new Date()).toString()[0]
        }
        return note;
    }

    map(note: NoteData){
        app.notes.push(note);
        app.counter++;
    }
}
export default Note;