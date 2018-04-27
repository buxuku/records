import React from 'react';

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
    render() {
        return (
            <footer className="footer">
                {this.renderTodoCount()}
            </footer>
        )
    }
}
export default Footer;