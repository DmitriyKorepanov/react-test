import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageMain from '../page-main/page-main';
import PageSearch from '../page-search/page-search';
import PageError from '../page-error/page-error';
import { MAIN_PAGE_ROUTE, SEARCH_PAGE_ROUTE } from '../../constants/routes';
import './app.pcss';

export default class App extends React.Component {
    render() {
        const { history } = this.props;
        return (
            <div className='app'>
                <Switch>
                    <Route
                        exact={ true }
                        history={ history }
                        path={ MAIN_PAGE_ROUTE }
                        component={ PageMain }
                    />
                    <Route
                        exact={ true }
                        history={ history }
                        path={ SEARCH_PAGE_ROUTE }
                        component={ PageSearch }
                    />
                    <Route
                        path='*'
                        component={ PageError }
                    />
                </Switch>
            </div>
        );
    }
}
