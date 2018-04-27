import React from 'react';
import TodoItem from './TodoItem'
import Footer from './Footer';
class MainSection extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    renderFooter = (completedCount) => {
        const { todos } = this.props;
        const activeCount = todos.length - completedCount;
        const { filter } = this.state;
        if (todos.length) {
            return (
                <Footer 
                    completedCount={completedCount}
                    activeCount={activeCount}
                    filter={filter}
                />
            )
        } 
    }
    render() {
        const { todos, actions } = this.props;
        const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0);
        return (
            <section className="main">
                <ul className="todo-list">
                    {todos.map(item => <TodoItem key={item.id} todo={item} {...actions} />)}                    
                </ul>
                {this.renderFooter(completedCount)}
            </section>
        )
    }
}
export default MainSection;