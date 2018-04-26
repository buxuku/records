import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Counter from './containers';
import counter from './reducers';

const store = createStore(counter, applyMiddleware(thunk));

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  rootEl
)