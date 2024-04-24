import React from 'react';

function PageHeader(props) {
    return (
        <section className="page-header wo">
            <div className="col-3-10 m-col-3-8 s-col-1-5">
                <h1 className="h1">
                    {props.h1}
                </h1>
            </div>
        </section>
    )
}

export default PageHeader
