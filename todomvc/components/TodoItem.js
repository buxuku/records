import React from 'react';
import classnames from 'classnames';
import TodoTextInput from './TodoTextInput'
class TodoItem extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state={
            editing: false
        }
    }
    handleEdit = () => {
        this.setState({
            editing: true
        })
    }
    handleSave = (id, text) => {
        this.props.editTodo(id, text);
        if(text) {
          this.setState({ editing: false});
        } else {
            this.props.removedTodo(id);
        }
    }
    render(){
        const { todo, completedTodo, removedTodo } = this.props;
        const element = this.state.editing
        ? <TodoTextInput
            onSave={(text) => this.handleSave(todo.id, text)}
            value={todo.text} />
        : (
            <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => completedTodo(todo.id)}
                />
                <label onDoubleClick={this.handleEdit}>
                    {todo.text}
                </label>
                <button onClick={() => removedTodo(todo.id)} className="destroy" />
            </div>
        )
        return (
            <li
                className={classnames({
                    completed: todo.completed,
                    editing: this.state.editing
                })}
            >{element}</li>
        )
    }
}
export default TodoItem;