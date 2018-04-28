import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import TodoTextInput from '../components/TodoTextInput';
export const Header = ({ addTodo }) => {
    return (
        <header className="header">
            <h1>Todos</h1>
            <TodoTextInput 
                onSave={(text) => addTodo(text)}
            />
        </header>
    )
}

export default connect(null, {addTodo})(Header);