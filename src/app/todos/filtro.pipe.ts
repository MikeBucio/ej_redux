import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.models';
import { filtrosVariados } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todo: Todo[], filtro: filtrosVariados): Todo[] {
    console.log(filtro);
    switch(filtro){
      case  'completados':
        return todo.filter(todo => todo.completado === true);

      case  'pendientes':
        return todo.filter(todo => todo.completado === false);

      default:
        return todo;
    }
  }

}
