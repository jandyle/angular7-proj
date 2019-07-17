import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
    ) {

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  isLogin : boolean = false;

  todos = [
    new Todo(1, 'test', false, new Date()),
    new Todo(1, 'chicken', false, new Date()),
    new Todo(1, 'beef', false, new Date())

    // {id : 1, description : 'test'},
    // {id : 2, description : 'chicken'},
    // {id : 3, description : 'beef'}
  ];
 

  constructor(private authentication: AuthenticationService
    ) { }

  ngOnInit() {
    this.isLogin = this.authentication.checkLogIn();
   }

}
