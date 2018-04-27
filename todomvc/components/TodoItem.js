import React from 'react';
import classnames from 'classnames';
class TodoItem extends React.Component{
    constructor(props, context){
        super(props, context);
    }
    render(){
        const { todo, completedTodo, removedTodo } = this.props;
        const element = (
            <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => completedTodo(todo.id)}
                />
                <label>
                    {todo.text}
                </label>
                <button onClick={() => removedTodo(todo.id)} className="destroy" />
            </div>
        )
        return (
            <li
                className={classnames({
                    completed: todo.completed
                })}
            >{element}</li>
        )
    }
}
export default TodoItem;