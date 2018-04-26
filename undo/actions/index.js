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
        const { counter } = getState();
        if (counter.present % 2 === 0) {
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

export function undo() {
    return {
        type: 'UNDO_INCREMENT'
    }
}

export function redo() {
    return {
        type: 'REDO_INCREMENT'
    }
}