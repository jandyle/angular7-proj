import { Component, OnInit } from '@angular/core';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
    ) {

  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'test', false, new Date()),
    new Todo(1, 'chicken', false, new Date()),
    new Todo(1, 'beef', false, new Date())

    // {id : 1, description : 'test'},
    // {id : 2, description : 'chicken'},
    // {id : 3, description : 'beef'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
