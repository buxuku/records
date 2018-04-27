import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRecuder = require('../reducers').default;
            store.replaceReducer(nextRecuder);
        });
    }
    return store;
}