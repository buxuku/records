const defaultState = [{
    text: 'stuey redux'
}];

export default function todos(state = defaultState, action) {
    switch(action.type) {
        case 'ADD_TODO':
        return [{text: action.text}, ...state];
        default:
        return state;
    }
}