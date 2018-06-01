import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mn-my-notes-app',
  templateUrl: './my-notes-app.component.html',
  styleUrls: ['./my-notes-app.component.scss']
})
export class MyNotesAppComponent implements OnInit {

  heading = "Notes";

  constructor() { }

  ngOnInit() {
  }

}
