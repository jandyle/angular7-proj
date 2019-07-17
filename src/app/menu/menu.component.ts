import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    isLogin: boolean = false;

  constructor(private authentication: AuthenticationService) { 
    this.isLogin = this.authentication.checkLogIn();
  }

  ngOnInit() {
   this.isLogin = this.authentication.checkLogIn();
  }

}
