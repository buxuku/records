import React from 'react';
import TodoItem from './TodoItem'
import Footer from '../containers/Footer';

const TODO_FILTERS = {
    'SHOW_ALL': () => true,
    'SHOW_ACTIVE': item => !item.completed,
    'SHOW_COMPLETED': item => item.completed,
}
class MainSection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            filter: 'SHOW_ALL'
        }
    }
    handleShow = (filter) => {
        this.setState({
            filter
        })
    }
    renderFooter = (completedCount) => {
        const { todos, actions } = this.props;
        const activeCount = todos.length - completedCount;
        const { filter } = this.state;
        if (todos.length) {
            return (
                <Footer 
                    completedCount={completedCount}
                    activeCount={activeCount}
                    filter={filter}
                    onShow={this.handleShow}
                    onClearCompleted={actions.onClearCompleted}
                />
            )
        } 
    }
    render() {
        const { todos, actions } = this.props;
        const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0);
        const filterTodos = todos.filter(TODO_FILTERS[this.props.filter]);
        return (
            <section className="main">
                <ul className="todo-list">
                    {filterTodos.map(item => <TodoItem key={item.id} todo={item} {...actions} />)}                    
                </ul>
                <Footer />
            </section>
        )
    }
}
export default MainSection;