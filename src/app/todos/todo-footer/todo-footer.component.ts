import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { filtrosVariados, setFiltro } from '../../filtro/filtro.actions';
import { quitarCompletado } from '../todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  filtroAc: filtrosVariados = 'todos'
  filtros: filtrosVariados[]= ['todos','completados', 'pendientes' ];
  pendientes: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    /* this.store.select('filtro').subscribe(resp=> this.filtroAc = resp) */
    this.store.subscribe(resp=>{
      this.filtroAc = resp.filtro;
      this.pendientes = resp.todos.filter(todo => todo.completado ==false).length
    })
  }

  cambiarFiltro(data){
    this.store.dispatch(setFiltro({filtro : data}))
  }
  quitarCompletados(){
    this.store.dispatch(quitarCompletado())
  }
}
