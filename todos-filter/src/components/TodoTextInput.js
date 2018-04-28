import React, { Component } from 'react'

export default class TodoTextInput extends React.Component {
    state = {text: this.props.text || ''};
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    handleSubmit = (e) => {
        if (e.which === 13) {
            this.props.onSave(this.state.text);
            this.setState({
                text: ''
            })
        }
    }
    render() {
        return (<input
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit}
        />);
    }
}