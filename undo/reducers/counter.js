export default function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREMENT':
        return state +1;
        case 'DECREMENT':
        return state -1;
        case 'INCREMENT_DOUBLE':
        return state +2 ;
        default:
        return state;
    }
}