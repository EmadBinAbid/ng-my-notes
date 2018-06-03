import { Component, OnInit } from '@angular/core';
import { EditorService } from '../../services/EditorService/editor.service';

@Component({
  selector: 'mn-my-notes-editor',
  templateUrl: './my-notes-editor.component.html',
  styleUrls: ['./my-notes-editor.component.scss']
})
export class MyNotesEditorComponent implements OnInit {

  editorText: string = "";

  constructor(private editorService: EditorService) { }

  ngOnInit() {
  }

  getText()
  {
    this.editorText = this.editorService.receiveNote();
    console.log(this.editorText);

  }

}
