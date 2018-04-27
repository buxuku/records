const defaultState = [{
    text: 'stuey redux',
    completed: false,
    id: 0
}];

export default function todos(state = defaultState, action) {
    switch(action.type) {
        case 'ADD_TODO':
        return [{
            text: action.text,
            completed: false,
            id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) +1,
        }, ...state];
        default:
        return state;
    }
}