import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : f => f);
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRecuder = require('../reducers').default;
            store.replaceReducer(nextRecuder);
        });
    }
    return store;
}