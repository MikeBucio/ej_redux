import { Component, OnInit, Input, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { Todo } from '../../models/todo.models';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as actions from '../todo.action';
import { borrar } from '../todo.action';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todos: Todo;
  @ViewChild('inputText', { static: false }) txtTodo: ElementRef;

  chk: FormControl;
  txtInput: FormControl;
  editando:boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.chk = new FormControl( this.todos.completado );
    this.txtInput = new FormControl( this.todos.texto, Validators.required );
    this.chk.valueChanges.subscribe( value =>{
      this.store.dispatch(actions.toggle( {id:this.todos.id} ))
    })
  }

  editar(){
    this.editando = true;
    this.txtInput.setValue(this.todos.texto)
    setTimeout(() => {
      this.txtTodo.nativeElement.select();
    }, 1);
  }

  terminarEdicion(){
    this.editando = false;

    if(this.txtInput.invalid)return;
    if(this.txtInput.value === this.todos.texto)return;
    this.store.dispatch(actions.editar({id:this.todos.id , texto:this.txtInput.value}))
  }

  borrar(){
    this.store.dispatch(borrar({id:this.todos.id}))
  }
}
