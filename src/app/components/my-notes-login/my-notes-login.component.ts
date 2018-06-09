import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from  '@angular/router';

import { HttpClient } from  '@angular/common/http';
import { EditorService } from '../../services/EditorService/editor.service';

@Component({
  selector: 'mn-my-notes-login',
  templateUrl: './my-notes-login.component.html',
  styleUrls: ['./my-notes-login.component.scss']
})
export class MyNotesLoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private http: HttpClient, private editorService: EditorService, private router: Router) { }

  ngOnInit() {
  }

  validateUser()
  {
    this.http.get(`http://127.0.0.1:3000/authentication-user?userId=${this.username}&password=${this.password}`).subscribe((isValid) => 
    {
      if(isValid == true)
      {
        //Allow access. Change header.
        this.editorService.setUsername(this.username);
        console.log("HUrrahhh");
        this.router.navigate(['myNotes']);
      }
    });
  }

}
