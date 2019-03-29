import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { equalSegments } from '@angular/router/src/url_tree';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'username';
  password = 'password';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    if (this.username === 'jandyle' && this.password === 'password') {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
        this.invalidLogin = true;
      }
  }
}
