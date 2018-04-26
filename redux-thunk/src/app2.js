import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

function increment() {
  return { type: "INCREMENT" };
}

function decrement() {
  return { type: "DECREMENT" };
}

function incrementIfOdd() {
  return (dispatch, getState) => {
    if (getState % 2 === 0) {
      return;
    }
    dispatch(increment());
  };
}

function incrementSync(deplay = 1000) {
  return dispatch => {
    setTimeout(() => dispatch(increment()), deplay);
  };
}

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter, applyMiddleware(thunk));

let currentValue = store.getState();

store.subscribe(() => {
  const preValue = currentValue;
  currentValue = store.getState();
  console.log("pre:", preValue, "cur:", currentValue);
});

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementIfOdd());
store.dispatch(incrementSync());
