export default function filter(state = 'SHOW_ALL', action) {
    switch(action.type) {
        case 'SHOW_COMPLETED':
        return 'SHOW_COMPLETED';
        default :
        return state
    }
}