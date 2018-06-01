import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mn-my-notes-header',
  templateUrl: './my-notes-header.component.html',
  styleUrls: ['./my-notes-header.component.scss']
})
export class MyNotesHeaderComponent implements OnInit {

  heading = 'Header';

  constructor() { }

  ngOnInit() {
  }

}
