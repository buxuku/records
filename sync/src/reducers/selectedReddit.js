import { SELECT_REDDIT } from '../actions';

export default function selectedReddit(state = 'reactjs', action) {
    switch(action.type) {
        case SELECT_REDDIT: 
        return action.reddit;
        default:
        return state;
    }
}