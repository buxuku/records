import React from 'react';
import TodoItem from './TodoItem'
class MainSection extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        const { todos, actions } = this.props;
        return (
            <section className="main">
                <ul className="todo-list">
                    {todos.map(item => <TodoItem key={item.id} todo={item} {...actions} />)}                    
                </ul>
            </section>
        )
    }
}
export default MainSection;