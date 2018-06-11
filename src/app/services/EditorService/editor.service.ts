import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  //Observable to display current selected MyNotesListComponent on MyNotesEditorComponent
  $editorSubject: BehaviorSubject<string> = new BehaviorSubject(null);
  $editorObservable: Observable<string>;

  $currentNoteIndexSubject: BehaviorSubject<number> = new BehaviorSubject(null);
  $currentNoteIndex: Observable<number>;

  notesList = [
    {"note": "Hi", "createdOn": new Date(), "updatedOn": new Date()}, 
    {"note": "Emad", "createdOn": new Date(), "updatedOn": new Date()},
    {"note": "Hey", "createdOn": new Date(), "updatedOn": new Date()}, 
    {"note": "Hello", "createdOn": new Date(), "updatedOn": new Date()}, 
    {"note": "Sample", "createdOn": new Date(), "updatedOn": new Date()},
    ];

  //Holds list's text for further passing to MyNotesEditorComponent
  noteHolder: string = null;

  constructor() { 
    this.$editorObservable = this.$editorSubject.asObservable();
    this.$currentNoteIndex = this.$currentNoteIndexSubject.asObservable();
  }

  //Returns all the saved notes to the MyNotesListComponent.
  getNotesList()
  {
    return this.notesList;
  }

  //Receives a new note from MyNotesAppComponent and adds it to the saved notes' array.
  addNewNote()
  {
    this.notesList.unshift({"note": "<New note>", "createdOn": new Date(), "updatedOn": new Date()});  //Adds new note to the beginning of array.
  }

  //Deletes a note from this.notesList array after receiving prompt from MyNotesEditorComponent
  deleteNote(index)
  {
    this.notesList.splice(index, 1);
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

  updateNotesList(data, index)
  {
    this.notesList[index]["note"] = data;
    this.notesList[index]["updatedOn"] = new Date();
  }

}
