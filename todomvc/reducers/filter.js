export default function filter(state = 'SHOW_ALL', action) {
    switch(action.type) {
        case 'SHOW_COMPLETED':
        return 'SHOW_COMPLETED';
        default :
        case 'SHOW_ALL':
        return 'SHOW_ALL';
        return state
    }
}