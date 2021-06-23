"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const App_1 = require("../App");
class Note {
    getNote(noteId, noteTitle, noteText, noteBgColor, isNotePinned) {
        let note = {
            id: noteId,
            title: noteTitle,
            text: noteText,
            bgColor: noteBgColor,
            isPinned: isNotePinned,
            date: (new Date()).toString()[0]
        };
        return note;
    }
    map(note) {
        App_1.default.notes.push(note);
        App_1.default.counter++;
    }
}
exports.Note = Note;
exports.default = Note;
//# sourceMappingURL=Note.js.map