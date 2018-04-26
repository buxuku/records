import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components';
import counter from './reducers';

const store = createStore(counter);

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      increment={() => store.dispatch({ type: 'INCREMENT'})}
      decrement={() => store.dispatch({ type: 'DECREMENT'})}
    />,
    rootEl
  )
}
render();

store.subscribe(render);