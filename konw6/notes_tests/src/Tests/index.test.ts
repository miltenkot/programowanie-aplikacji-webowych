import Note from '../Note/Note';

describe('Note', () => {
    it('initialize note ', () => {
         const note = new Note();
         const newNote = note.getNote(1,'title','text','#fff',false); 
         let noteData: NoteData = {
            id: 1,
            title: 'title',
            text: 'text',
            bgColor: '#fff',
            isPinned: false,
            date: (new Date()).toString()[0]
         }
         expect(newNote.title).toBe(noteData.title);
         expect(newNote.text).toBe(noteData.text);
         expect(newNote.bgColor).toBe(noteData.bgColor);
         expect(newNote.isPinned).toBe(noteData.isPinned);
    });

});