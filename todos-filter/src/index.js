import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import "todomvc-app-css/index.css";
const store = createStore(reducers,  window.devToolsExtension ? window.devToolsExtension() : f => f);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
