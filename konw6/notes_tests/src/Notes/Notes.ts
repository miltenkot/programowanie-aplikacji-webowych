import app from '../App';
import '../Styles/note.scss';
import { Colors } from '../Enums/enum'

export class Notes{

    pinnedDiv: HTMLDivElement;
    notesDiv: HTMLDivElement;
    
    create(note: NoteData){

        let noteDiv = document.createElement("div");
        noteDiv.id = app.counter.toString();
        noteDiv.className = "note";
        noteDiv.style.backgroundColor = note.bgColor;

        let noteInnerWrapper = document.createElement("div");
        noteInnerWrapper.id = "noteInnerWrapper" + app.counter;
        noteInnerWrapper.className = "noteInnerWrapper";

        let noteDragDiv: HTMLDivElement = document.createElement("div");
        noteDragDiv.id = "noteDrag" + app.counter;
        noteDragDiv.className = "noteDrag";

        let newDate = new Date()
        let noteDate: HTMLSpanElement = document.createElement("span");
        noteDate.id = "noteDate" + app.counter;
        noteDate.className = "noteDate";
        noteDate.innerHTML = newDate.toISOString().split('T')[0];

        let noteTitleDiv: HTMLDivElement = document.createElement("div");
        noteTitleDiv.id = "noteTitle" + app.counter;
        noteTitleDiv.className = "noteTitle";
        noteTitleDiv.contentEditable = "true";
        
        let title: HTMLSpanElement =  document.createElement("span");
        title.id = "noteTitle" + app.counter;
        title.className = "noteTitle";
        title.innerHTML = note.title;
        title.addEventListener('DOMSubtreeModified', () => {
            note.title = title.innerHTML;
        });

        let noteCloseButton: HTMLButtonElement = document.createElement("button");
        noteCloseButton.id = "noteCloseButton" + app.counter;
        noteCloseButton.className = "noteCloseButton";
        noteCloseButton.innerHTML = 'X';
        this.noteCloseEvent(noteCloseButton, note);

        let noteTextArea: HTMLTextAreaElement = document.createElement("textarea");
        noteTextArea.id = "noteTextArea" + app.counter;
        noteTextArea.className = "noteTextArea";
        noteTextArea.innerHTML = note.text
        noteTextArea.rows = 8;
        this.noteCheckTextAreaEvent(noteTextArea, note)

        let noteButtons: HTMLDivElement = document.createElement("div");
        noteButtons.id = "noteButtonsDiv";

        let pinNote: HTMLElement = document.createElement("checkbox");
        pinNote.id = "pinNote";
        pinNote.className = "noteButtons";
        pinNote.innerText = "PIN"
        this.notePinEvent(pinNote, noteDiv, note)

        let noteChangeColor: HTMLButtonElement = document.createElement("button");
        noteChangeColor.id = "noteChangeColor";
        noteChangeColor.className = "noteButtons";
        noteChangeColor.innerText = "COLOR"
        this.noteChangeColorEvent(noteChangeColor, noteDiv, note);

        noteDiv.appendChild(noteDragDiv);
        noteDragDiv.appendChild(noteDate);
        noteDiv.appendChild(noteInnerWrapper);

        noteInnerWrapper.appendChild(noteTitleDiv);
        noteTitleDiv.appendChild(title);
        noteInnerWrapper.appendChild(noteCloseButton);
        noteInnerWrapper.appendChild(noteTextArea);

        noteDiv.appendChild(noteButtons);
        noteButtons.appendChild(pinNote);
        noteButtons.appendChild(noteChangeColor);
        return noteDiv;
    }

    noteCloseEvent(noteCloseButton: HTMLButtonElement, note: NoteData){

        noteCloseButton.onclick = () => { 
            noteCloseButton.parentNode.parentNode.parentNode.removeChild(noteCloseButton.parentNode.parentNode);
            app.notes.splice(app.notes.indexOf(app.notes.find(element => element.id == note.id)),1);
            app.noteLS.splice(app.noteLS.indexOf(app.noteLS.find(element => element.id == note.id)),1);
        }
    }

    noteCheckTextAreaEvent(noteTextArea: HTMLTextAreaElement,  note: NoteData){

        noteTextArea.addEventListener('change', () => {
            note.text = noteTextArea.value;
        });
    }

    notePinEvent(pinNote: HTMLElement, noteDiv: HTMLDivElement, note: NoteData){

        pinNote.addEventListener('click', () => {
            if(!note.isPinned){
                this.pinnedDiv.appendChild(noteDiv);
                note.isPinned = true;
                
            }else{
                this.notesDiv.appendChild(noteDiv);
                note.isPinned = false;
            }
        });
    }

    noteChangeColorEvent(noteChangeColor: HTMLButtonElement, noteDiv: HTMLDivElement, note: NoteData){

        noteChangeColor.addEventListener('click', () => {
            if(document.querySelector("#changeColorDiv") == null){
    
                let wrapper: HTMLDivElement = document.createElement("div");
                wrapper.id = "changeColorDiv" + app.counter;
                wrapper.className = "changeColorDiv"
                wrapper.tabIndex= 1;
                noteDiv.appendChild(wrapper);
    
                wrapper.focus();
                wrapper.addEventListener('focusout',() => {
                    wrapper.parentNode.removeChild(wrapper);
                });
    
                for(let i = 0; i < 6; i++){
    
                    let colorDiv: HTMLDivElement = document.createElement("div");
                    colorDiv.className = 'colorDiv';
                    colorDiv.id = Colors[i];
    
                    let colorCircle: HTMLDivElement = document.createElement("div");
                    colorCircle.className = "colorCircle"
                    colorCircle.style.backgroundColor = Colors[i];
    
                    colorCircle.addEventListener('click', () => {
                        noteDiv.style.backgroundColor = colorCircle.style.backgroundColor;
                        note.bgColor = colorCircle.style.backgroundColor
                    });
                    colorDiv.appendChild(colorCircle);
                    wrapper.appendChild(colorDiv);
                }
            }
        });
    }
}
export default Notes;    