import * as types from '../constants/ActionsTypes';
const initalSatate = [{
    text: 'use redux',
    id: 0,
    completed: false,
}]
export default function todos(state = initalSatate, action) {
    switch(action.type) {
        case types.ADD_TODO:
        return [{
            text: action.text,
            id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
            completed: false,
        }, ...state];
        default :
        return state;
    }
}