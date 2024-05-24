import React from 'react';

import PageHeader from '../../components/page-header/pageHeader.js';

export const metadata = {
    title: 'Accessibility | Pondering My Scrolls',
}

function Accessibility() {
    return (
        <main className="wo">
            <PageHeader h1="Accessibility" />
            <div className="col-3-10 m-col-2-9 wysiwyg">
                <p>
                    This website has been created in a way in which it intends to comply wih WCAG version 2.2 Level AAA accessibility standards.
                </p>
                <p>
                    It's our responsibility as good internet neighbours to fix any accessibility issues as soon as possible. Please email Nicky at hello@nicky.dev with any accessibility concerns or feature requests.
                </p>
            </div>
        </main>
    )
}

export default Accessibility