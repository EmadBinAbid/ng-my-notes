import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'mn-my-notes-register',
  templateUrl: './my-notes-register.component.html',
  styleUrls: ['./my-notes-register.component.scss']
})
export class MyNotesRegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm()
  {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  registerUser()
  {
    if(this.registerForm.status  === "VALID")
    {
      console.log("User registered.");
    }
    else
    {
      alert("Username and Password are required fields!");
    }
  }

}
