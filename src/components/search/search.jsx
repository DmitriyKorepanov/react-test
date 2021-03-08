import React from 'react';
import './search.pcss';
import PropTypes from "prop-types";
import cn from '../../utils/cn';

@cn('search')
export class Search extends React.Component {
    static propTypes = {
        getRepository: PropTypes.func.isRequired,
        history: PropTypes.any
    };

    handleSearch = () => {
        const {getRepository,  history} = this.props;
        const inputValue = document.getElementById('inputFilm').value; // example  'kubernetes/kubernetes';
        getRepository(inputValue);
        if(window.location.pathname === '/') history.push('search');
    };

    render(cn) {
        return (
            <form className={ cn('form') } action=''>
                <input className={ cn('input') } id='inputFilm' type='text' />
                <button onClick={ this.handleSearch } className={ cn('btn') } type='button'>Найти</button>
            </form>
        );
    }
}
