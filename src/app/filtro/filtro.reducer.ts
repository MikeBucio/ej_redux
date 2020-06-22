import { createReducer, on } from "@ngrx/store";
import { setFiltro, filtrosVariados } from './filtro.actions';

export const estadoInicial: filtrosVariados = 'todos';

const _filtroReducer = createReducer(estadoInicial,
    on(setFiltro, (state, {filtro}) => filtro),
    )
   
export function filtroReducer(state, action){
    return _filtroReducer(state, action)
}