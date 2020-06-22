import { Todo } from './models/todo.models';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { filtrosVariados } from './filtro/filtro.actions';
import { filtroReducer } from './filtro/filtro.reducer';


export interface AppState {
    todos: Todo[],
    filtro: filtrosVariados
}

export const appReducers: ActionReducerMap<AppState> = {

    todos:todoReducer,
    filtro: filtroReducer


}