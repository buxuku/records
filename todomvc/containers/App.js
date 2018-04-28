import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions';

function App({todos,filter, actions}) {
    return (
        <div>
            <Header
                addTodo={actions.addTodo}
            />
            <MainSection
                todos={todos}
                actions={actions}
                filter={filter}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.filter
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);