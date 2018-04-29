import { RECEIVE_POSTS, REQUEST_POSTS,INVALIDATE_REDDIT } from '../actions';

function posts(state = {
    isFetching: false,
    invalidate: false,
    item: [],
}, action) {
    switch(action.type) {
        case INVALIDATE_REDDIT:
        return Object.assign({}, state, {didInvalidate: true});
        case REQUEST_POSTS:
        return Object.assign({}, state, {isFetching: true});
        case RECEIVE_POSTS:
        return Object.assign({}, state, {isFetching:false, didInvalidate: false, items: action.posts, lastUpdate: action.updateAt})
    }
}

export default function postByReddit(state = {}, action) {
    switch(action.type) {
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
        case INVALIDATE_REDDIT:
        return Object.assign({}, state, {
            [action.reddit]: posts(state[action.reddit],action)
        });
        default:
        return state;
    }
}