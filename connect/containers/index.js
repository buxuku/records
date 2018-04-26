import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import Counter from '../components';

export default connect(
    state => ({counter: state}),
    Actions
)(Counter)
