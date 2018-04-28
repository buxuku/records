export default function todos(state = 0, action) {
    switch(action.type) {
        case 'ADD_TODO':
        return 1;
        default :
        return 2;
    }
}