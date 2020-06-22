import { createAction, props } from '@ngrx/store';

export type filtrosVariados = 'todos' | 'completados' | 'pendientes';   

export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{filtro: filtrosVariados}>()
) 

