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