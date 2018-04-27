import React from 'react';
import TodoItem from './TodoItem'
class MainSection extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        const { todos } = this.props;
        return (
            <section className="main">
                <ul className="todo-list">
                    {todos.map(item => <TodoItem key={item.text} value={item.text} />)}                    
                </ul>
            </section>
        )
    }
}
export default MainSection;