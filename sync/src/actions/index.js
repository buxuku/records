export const SELECT_REDDIT = 'SELECT_REDDIT';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT';

export function sleectReddit(reddit) {
    return {
        type: SELECT_REDDIT,
        reddit,
    }
}

export function invalidateReddit(reddit) {
    return {
        typd:INVALIDATE_REDDIT,
        reddit
    }
}

function requestPosts(reddit) {
    return {
        type: REQUEST_POSTS,
        reddit,
    }
}

function receivePosts (reddit, json) {
    return {
        type: RECEIVE_POSTS,
        reddit,
        posts: json.data.children.map(item => item.data),
        receivedAt: Date.now(),
    }
}

function fetchPosts(reddit) {
    return dispatch => {
        dispatch(requestPosts(reddit));
        return fetch(`https://www.reddit.com/r/${reddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(reddit,json)))
    }
}

function shouldFetchPosts(state, reddit) {
    const posts = state.postByReddit[reddit];
    if (!posts) {
        return true;
    }
    if (posts.isFetching) {
        return false;
    }
    return posts.didInvalidate;
}

export function fetchPostIfNeeded(reddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(),reddit)) {
            return dispatch(fetchPosts(reddit));
        }
        return null;
    }
}