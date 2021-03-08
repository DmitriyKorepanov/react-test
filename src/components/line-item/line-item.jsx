import React from 'react';
import './line-item.pcss';
import cn from '../../utils/cn';

@cn('line-item')
export class LineItem extends React.Component {

    render(cn) {
        const {item : {full_name, owner,  html_url, stargazers_count}} = this.props;
        const name = owner?.login;

        return (
            <li className={ cn() }>
                <span className={ cn('name') }>Full Name: </span> {full_name || ''}
                <span className={ cn('name') }> Owner: </span> {name || ''}
                <span className={ cn('name') }>Stars: </span> {stargazers_count || 0}
                <span className={ cn('name') }>URL: </span> <a href={html_url || '-'}>{html_url || '-'}</a>
            </li>
        );
    }
}
