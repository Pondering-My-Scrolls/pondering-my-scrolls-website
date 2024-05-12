import React from 'react';

import PageHeader from '../../components/page-header/pageHeader.js';

export const metadata = {
    title: 'Privacy | Pondering My Scrolls',
}

function Privacy() {
    return (
        <main className="wo">
            <PageHeader h1="Privacy Policy" />
            <div className="wysiwyg">
                <p>
                    This website does not collect any data in any way.
                </p>
            </div>
        </main>
    )
}

export default Privacy