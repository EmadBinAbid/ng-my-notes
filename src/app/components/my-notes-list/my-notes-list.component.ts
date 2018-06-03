import { Component, OnInit } from '@angular/core';
import { EditorService } from '../../services/EditorService/editor.service';

@Component({
  selector: 'mn-my-notes-list',
  templateUrl: './my-notes-list.component.html',
  styleUrls: ['./my-notes-list.component.scss']
})
export class MyNotesListComponent implements OnInit {

  notesList = [];
  currentNote: number = null;

  constructor(private editorService: EditorService) { }

  ngOnInit() {
    this.notesList = this.editorService.getNotesList();
  }

  setCurrentNote(index)
  {
    this.currentNote = index;
    console.log(this.currentNote);
    this.editorService.sendNote(this.notesList[this.currentNote]);

    //
    this.editorService.$currentNoteIndexSubject.next(this.currentNote);
    this.editorService.$editorSubject.next(this.notesList[this.currentNote]);
  }

}
