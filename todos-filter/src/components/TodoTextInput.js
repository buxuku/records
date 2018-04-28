import React, { Component } from 'react'

export default class TodoTextInput extends React.Component {
    state = {text: this.props.text || ''};
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (<input
          value={this.state.text}
          onChange={this.handleChange}
        />);
    }
}