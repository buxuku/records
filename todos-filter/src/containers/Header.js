import React from 'react';
import TodoTextInput from '../components/TodoTextInput';
export const Header = () => {
    return (
        <header className="header">
            <h1>Todos</h1>
            <TodoTextInput />
        </header>
    )
}

export default Header;