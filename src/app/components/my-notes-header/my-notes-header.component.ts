import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'mn-my-notes-header',
  templateUrl: './my-notes-header.component.html',
  styleUrls: ['./my-notes-header.component.scss']
})
export class MyNotesHeaderComponent implements OnInit {

  heading = 'MyNotes';

  anchorState = false;

  anchorName = 'Login';
  anchorHref  = '#';
  anchorTitle = 'Login';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.$login.subscribe((value) => {
      if(value == true)
      {
        this.anchorName = 'Logout';
        this.anchorHref = '#';
        this.anchorTitle = 'Logout';

      }
      else if(value == false)
      {
        this.anchorName = 'Login';
        this.anchorHref = '#';
        this.anchorTitle = 'Login';
        
      }
    })
  }

  changeState()
  {
    if (this.anchorState == true)
    {
      this.anchorState = false;
      this.loginService.$loginSubject.next(false);
    }
    else
    {
      this.anchorState = true;
      this.loginService.$loginSubject.next(true);
    }
  }

}
