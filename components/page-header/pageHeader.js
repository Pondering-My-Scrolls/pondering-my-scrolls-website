import React from 'react';

import './page-header.scss';

function PageHeader(props) {
    return (
        <section className="page-header">
            <h1 className="h1">
                {props.h1}
            </h1>
        </section>
    )
}

export default PageHeader
