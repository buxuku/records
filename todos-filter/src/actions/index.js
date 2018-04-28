import * as type from '../constants/ActionsTypes'; 

export const addTodo = (text) => ({ type:type.ADD_TODO, text });