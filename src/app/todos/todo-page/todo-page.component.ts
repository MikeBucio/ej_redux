import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { toggleAll } from '../todo.action';
import { Todo } from '../../models/todo.models';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  selecTodos: boolean = false;
  todos: Todo[] = [];
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    
  }

  seleccionarTodo(){
    this.selecTodos = !this.selecTodos; 
this.store.dispatch(toggleAll({completado:this.selecTodos}))  }
}
