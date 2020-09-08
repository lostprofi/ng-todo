import { TodoService } from './../../todo.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {

  constructor(private fb: FormBuilder, public todoService: TodoService) { }

  addTodo = this.fb.group({
    createTodo: ['', Validators.required],
  })

  addTodoHandle(title: string){
    this.todoService.addTodo(title);
  }



  ngOnInit(): void {
  }

}
