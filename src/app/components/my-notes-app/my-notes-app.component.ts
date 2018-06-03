import { Component, OnInit } from '@angular/core';
import { SaveService } from '../../services/SaveService/save.service';
import { EditorService } from '../../services/EditorService/editor.service';

@Component({
  selector: 'mn-my-notes-app',
  templateUrl: './my-notes-app.component.html',
  styleUrls: ['./my-notes-app.component.scss']
})
export class MyNotesAppComponent implements OnInit {

  heading = "Notes";

  constructor(private editorSerive: EditorService, private saveService: SaveService) { }

  ngOnInit() {
    
  }

  //Prompts the service to take note from Editor and save it.
  saveNote()
  {
    this.saveService.$saveSubject.next(true);
  }

  newNote()
  {
    this.editorSerive.addNewNote();
  }

  deleteNote()
  {
    this.saveService.$deleteSubject.next(true);
  }

}
