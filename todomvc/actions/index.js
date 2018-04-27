export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

export function completedTodo(id) {
    return {
        type: 'COMPLETED_TODO',
        id
    }
}

export function removedTodo(id) {
    return {
        type: 'REMOVED_TODO',
        id
    }
}