import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

export default function configureStore() {
    const store = createStore(rootReducers, compose(
        applyMiddleware(thunk, createLogger()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    if(module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        })
    }
    return store;
}