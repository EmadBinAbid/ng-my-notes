import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  $loginSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  $logoutSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  $login: Observable<any>;
  $logout: Observable<any>;

  constructor() {
    this.$login = this.$loginSubject.asObservable();
    this.$logout = this.$logoutSubject.asObservable();
   }
}
