import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  //Observable to display current selected MyNotesListComponent on MyNotesEditorComponent
  $editorSubject: BehaviorSubject<string> = new BehaviorSubject(null);
  $editorObservable: Observable<string>;

  $currentNoteIndexSubject: BehaviorSubject<number> = new BehaviorSubject(null);
  $currentNoteIndex: Observable<number>;

  $noteIdSubject: BehaviorSubject<string> = new BehaviorSubject(null);
  $noteIdObservable: Observable<string>;

  notesListObject: Object;

  //This gets set when MyNotesLoginComponent sends a valid user.
  username: string;
  noteId: string;
  currentNoteData: string;

  /*notesList = [
    {
      noteText: "Sample 1", createdOn: new Date(), updatedOn: new Date()
    },
    {
      noteText: "Sample 2", createdOn: new Date(), updatedOn: new Date()
    },
    {
      noteText: "Sample 3", createdOn: new Date(), updatedOn: new Date()
    },
  ];*/

  //Holds list's text for further passing to MyNotesEditorComponent
  noteHolder: string = null;

  constructor(private http: HttpClient) { 

    
    //this.notesList = this.notesListObject["notes"];

    console.log(this.notesListObject);

    this.$editorObservable = this.$editorSubject.asObservable();
    this.$currentNoteIndex = this.$currentNoteIndexSubject.asObservable();
    this.$noteIdObservable = this.$noteIdSubject.asObservable();
  }

  //Sets the this.username for further passing as an API param.
  setUsername(passedName: string)
  {
    this.username = passedName;
    console.log(this.username);
  }

  //Returns all the saved notes to the MyNotesListComponent.
  getNotesList()
  {
    //return this.notesList;
    return this.http.get(`http://127.0.0.1:3000/my-notes/${this.username}`);
  }

  //Receives a new note from MyNotesAppComponent and adds it to the saved notes' array.
  addNewNote()
  {
    //this.notesList.unshift({"noteText": "<New note>", "createdOn": new Date(), "updatedOn": new Date()});  //Adds new note to the beginning of array.
    var newObject = { "noteText": "<New note>" };

    this.http.post(`http://127.0.0.1:3000/my-notes/${this.username}`, newObject, httpOptions)
    .subscribe((value) => {});
  }

  //Deletes a note from this.notesList array after receiving prompt from MyNotesEditorComponent
  deleteNote(index, noteId)
  {
    //this.notesList.splice(index, 1);
    this.noteId = noteId;

    this.http.delete(`http://127.0.0.1:3000/my-notes/${this.username}/${this.noteId}`, httpOptions)
    .subscribe((value) => {});
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

  updateNotesList(data, index, noteId)
  {
    /*this.notesList[index]["noteText"] = data;
    this.notesList[index]["updatedOn"] = new Date();*/

    this.noteId = noteId;
    this.currentNoteData = data;

    var noteObject = { "noteText": this.currentNoteData };

    var answer;
    
    this.http.put(`http://127.0.0.1:3000/my-notes/${this.username}/${this.noteId}`, noteObject, httpOptions)
    .subscribe((value) => { answer=value; });
    console.log(answer);
  }

}
