import React from 'react';

import './page-header.scss';

function PageHeader(props) {
    return (
        <section className="page-header col-3-10 m-col-2-9">
            <h1 className="h1">
                {props.h1}
            </h1>
        </section>
    )
}

export default PageHeader
