import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  notesList = ["Hi", "Emad", "Hey", "Hello"];

  //Holds list's text for further passing to MyNotesEditorComponent
  noteHolder: string = null;

  constructor() { }

  //Returns all the saved notes to the MyNotesListComponent.
  getNotesList()
  {
    return this.notesList;
  }

  //Receives a new note from MyNotesListComponent and adds it to the saved notes' array.
  addNote(note)
  {
    this.notesList.push(note);
  }

  //Saves the note text passed by MyNotesListComponent
  sendNote(note)
  {
    this.noteHolder = note;
  }

  //Returns the text of MyNotesListComponent to MyNotesEditorComponent
  receiveNote()
  {
    return this.noteHolder;
  }
}
