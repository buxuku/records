import React from 'react';
import classnames from 'classnames';

const FITTLER_TITTLES = {
    SHOW_ALL: 'ALL',
    SHOW_ACTIVE: 'ACTIVE',
    SHOW_COMPLETED: 'COMPLETED'
}
class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    renderTodoCount = () => {
        const { activeCount } = this.props;
        return (
            <span className="todo-count">
                {activeCount} items left
            </span>
        )
    }
    renderFilterLink = (filter) => {
        const title = FITTLER_TITTLES[filter];
        const { filter: selectedFilter, onShow } = this.props;
        return (
            <a
                className={classnames({
                    selected: filter === selectedFilter
                })}
                onClick={() => onShow(filter)}
            >
                {title}
            </a>
        )
    }
    renderClearButton = () => {
        const { completedCount, onClearCompleted } = this.props;
        if (completedCount) {
            console.log("in");
            return (
                <button className="clear-completed" onClick={onClearCompleted}>
                    clear completed
                </button>
            )
        }
        return null;
    }
    render() {
        return (
            <footer className="footer">
                {this.renderTodoCount()}
                <ul className="filters">
                {
                    ['SHOW_ALL','SHOW_ACTIVE','SHOW_COMPLETED'].map( item => <li key={item}>{this.renderFilterLink(item)}</li>)
                }
                </ul>
                {this.renderClearButton()}
            </footer>
        )
    }
}
export default Footer;