import React from 'react';

function Footer() {
    return (
        <footer className="footer wo" role="contentinfo">
            {/* Copyright & Legal */}
            <p className="col-1-12 m-col-1-10 s-col-1-5">
                &copy; Pondering My Scrolls {new Date().getFullYear()}
            </p>
        </footer>
    )
}

export default Footer