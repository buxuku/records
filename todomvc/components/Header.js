import React from 'react';
import TodoTextInput from './TodoTextInput';
class Header extends React.Component{
    constructor(){
        super();
    }
    handleSave = (text) => {
        if (text) {
            console.log(text);
            this.props.addTodo(text);
        }
    }
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <TodoTextInput
                    onSave={this.handleSave}
                />
            </header>
        )
    }
}

export default Header;