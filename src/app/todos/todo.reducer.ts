import { createReducer, on } from "@ngrx/store";
import { crear, toggle, editar, borrar, toggleAll, quitarCompletado } from './todo.action';
import { Todo } from '../models/todo.models';

export const initialState:Todo[] = [
    new Todo ('barrer'),
    new Todo ('trapear'),
    new Todo ('Lavar'),
    new Todo ('trastes')
];

const _todoReducer = createReducer(initialState,
    on(crear, (state, {texto}) => [...state, new Todo(texto)]),
    on(toggle, (state, {id})=>{
      return state.map(todo =>{
        if(todo.id === id){
            return {
                ...todo,
                completado: !todo.completado
            }
        } 
        else {
            return todo;
        } 
      })
    }),
    on(editar, (state, {id, texto})=>{
      return state.map(todo =>{
        if(todo.id === id){
            return {
                ...todo,
               texto: texto
            }
        } 
        else {
            return todo;
        } 
      })
    }),
    on(borrar, (state, {id})=> state.filter(todo => todo.id !=id )),
    on(toggleAll, (state,{completado}) => state.map(todos =>{
        console.log(completado);
        return {
            ...todos,
            completado:completado
        }
    })),
    on(quitarCompletado, state => state.filter(todo => todo.completado === false)),
    )
   
export function todoReducer(state, action){
    return _todoReducer(state, action)
}