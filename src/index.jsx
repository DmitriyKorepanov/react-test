import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router  } from 'react-router-dom';
import {createBrowserHistory} from 'history'
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { AppContainer } from 'react-hot-loader'

import App from './components/app/app';
import { configureStore } from './store/store';

const store = configureStore();
const mountNode = document.getElementById('react-app');
const history = createBrowserHistory();

const Application = () => (
    <Provider store={ store }>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>
);

const renderApplication = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        mountNode
    );
};

renderApplication(Application);

if (module.hot) {
    module.hot.accept('./components/app/app', () => { renderApplication(Application) });
}
