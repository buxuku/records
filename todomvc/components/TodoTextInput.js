import React from 'react';
import classnames from 'classnames';

class TodoTextInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text: this.props.value || ''
        }
    }
    handleInput  = (e) => {
        this.setState({
            text: e.target.value,
        })
    }
    handleSubmit = (e) => {
        if (e.which === 13){
            this.props.onSave(e.target.value);
            this.setState({
                text: '',
            })
        }
    }
    render() {
        return (
            <input
                className={classnames({ edit: true })}
                value={this.state.text}
                onChange={this.handleInput}
                onKeyDown={this.handleSubmit}
            />
        )
    }
}
export default TodoTextInput;