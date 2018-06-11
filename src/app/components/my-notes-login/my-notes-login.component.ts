import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'mn-my-notes-login',
  templateUrl: './my-notes-login.component.html',
  styleUrls: ['./my-notes-login.component.scss']
})
export class MyNotesLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    console.log(this.loginForm);
  }

  createForm()
  {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  validateUser()
  {
    if(this.loginForm.status === "VALID")
    {
      console.log(true);
    }
    else
    {
      alert("Username and Password are required fields!");
    }
  }

  loginUser()
  {
    this.router.navigate(['myNotes']);
  }

}
