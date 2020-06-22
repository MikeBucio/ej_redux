import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { filtrosVariados } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosVariados;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {

    /* this.store.select('todos').subscribe(todos => this.todos = todos); */
    this.store.subscribe(({todos, filtro}) => {
      this.todos = todos;
      this.filtroActual = filtro; 
    })

  }

}
