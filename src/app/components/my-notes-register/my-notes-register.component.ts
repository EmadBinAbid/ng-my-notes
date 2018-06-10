import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'mn-my-notes-register',
  templateUrl: './my-notes-register.component.html',
  styleUrls: ['./my-notes-register.component.scss']
})
export class MyNotesRegisterComponent implements OnInit {

  username: string = null;
  password: string = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registerUser()
  {
    var newUserObject = {
      "userId": this.username,
      "password": this.password
    };
    this.http.post('http://127.0.0.1:3000/authentication', newUserObject, httpOptions)
    .subscribe((value)=>{});
  }

}
