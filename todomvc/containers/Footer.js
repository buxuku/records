import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions';
import * as filterActions from '../actions/filter';
import Test from '../components/Test';
function Footer({todos,filter, actions}) {
    return (
        <Test
          actions={actions}
          todos={todos}
          filter={filter}
        />
    )
}

function mapStateToProps(state) {
    return {
        filter: state.filter,
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(TodoActions,{},filterActions), dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Footer)