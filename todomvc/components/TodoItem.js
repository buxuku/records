import React from 'react';

class TodoItem extends React.Component{
    render(){
        return (
            <li>{this.props.value}</li>
        )
    }
}
export default TodoItem;