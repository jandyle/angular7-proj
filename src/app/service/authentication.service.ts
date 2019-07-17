import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === "jandyle" && password === "password") {
      sessionStorage.setItem('authenticationUser', username);
      return true;
    } else {
      return false;
    }
  }

  checkLogIn(){
      let user = sessionStorage.getItem('authenticationUser');
      return !(user===null);
  }
}
