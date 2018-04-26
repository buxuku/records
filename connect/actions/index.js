export function increment() {
    return {
        type: 'INCREMENT',
    }
}
export function decrement() {
    return {
        type: 'DECREMENT',
    }
}

export function incrementIfOdd() {
    return (dispatch, getState) => {
        if (getState() % 2 === 0) {
            return;
        }
        dispatch(increment());
    }
}

export function incrementSync() {
    return dispatch => {
        setTimeout(() => dispatch(increment()), 1000);
    }
}