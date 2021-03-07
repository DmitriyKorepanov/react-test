import React from 'react';
import { Link } from 'react-router-dom';

import { MAIN_PAGE_ROUTE } from '../../constants/routes';
import cn from '../../utils/cn';

@cn('page-error')
export default class PageError extends React.Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <h1 className={ cn('header') }>
                    Такой страницы не существует :(
                </h1>
                <Link to={ MAIN_PAGE_ROUTE }>На главную страницу</Link>
            </div>
        );
    }
}
