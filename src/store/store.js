import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

// Redux dev tools.
// See more: https://github.com/zalmoxisus/redux-devtools-extension
function getDevTools() {
    return process.env.NODE_ENV !== 'production' && (typeof window === 'object') && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f;
}

export function configureStore(initialState = {}) {
    let middlewares = [thunk];

    let enhanser = compose(
        applyMiddleware(...middlewares),
        getDevTools()
    );

    return createStore(
        reducers,
        initialState,
        enhanser
    );
}
