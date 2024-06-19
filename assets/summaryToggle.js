"use client";

import React, { useState } from 'react';

import './summary-toggle.scss';

function SummaryToggle(props) {
    const [isOpen, setIsOpen] = useState(false); 
    const summaryToggleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <h2>
                <button 
                    id="summaryToggle"
                    aria-expanded={`${!isOpen ? false : true}`}
                    onClick={summaryToggleClick}
                >
                    Read the summary +
                </button>
            </h2>
            <p className={`summary ${!isOpen ? '' : 'open'}`}>
                {props.content}
            </p>

        </>

    )
}

export default SummaryToggle