import { Todo } from './todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todos:Todo[] = [
    
  ];

  addTodo(title: string):void {

    const id = this.todos.length + 1;
    alert('fuck')

    const todo: Todo = {
      id,
      title,
      completed: false,
      editing: false,
    };

    this.todos.push(todo);
  }

  getTodo(){
    return this.todos
  }

  constructor() { }
}
