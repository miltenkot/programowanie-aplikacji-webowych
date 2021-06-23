"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Note_1 = require("../Note/Note");
describe('Note', () => {
    it('initialize note ', () => {
        const note = new Note_1.default().getNote(1, 'title', 'text', '#fff', false);
        const noteData = {
            id: 1,
            title: 'title',
            text: 'text',
            bgColor: '#fff',
            isPinned: false,
            date: (new Date()).toString()[0]
        };
        expect(note).toBe(noteData);
    });
});
//# sourceMappingURL=index.test.js.map