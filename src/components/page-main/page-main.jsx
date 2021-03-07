import React from 'react';

import cn from '../../utils/cn';

@cn('page-main')
export default class PageMain extends React.Component {
    render(cn) {
        return (
            <div className={ cn() }>
                <h1 className={ cn('header') }>
                    Title
                </h1>
            </div>
        );
    }
}
