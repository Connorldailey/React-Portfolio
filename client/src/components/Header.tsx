import React, { memo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';

const Header: React.FC = () => {
    useEffect(() => {
        const collapseElement = document.getElementById('navbarNav');
    
        // Handlers to add/remove a class on <body>
        const handleShow = () => {
            document.body.classList.add('blur-background');
        };
        const handleHide = () => {
            document.body.classList.remove('blur-background');
        };
    
        // Attach Bootstrap's show/hide collapse events
        collapseElement?.addEventListener('show.bs.collapse', handleShow);
        collapseElement?.addEventListener('hide.bs.collapse', handleHide);
    
        // Clean up
        return () => {
            collapseElement?.removeEventListener('show.bs.collapse', handleShow);
            collapseElement?.removeEventListener('hide.bs.collapse', handleHide);
        };
      }, []);

    return (
        <header className="sticky-top">
            {/* Navigation bar */}
            <nav className="custom-header navbar navbar-expand-md">
                <div className="container-fluid">
                    {/* Website title */}
                    <NavLink 
                        to="/"
                        className={({ isActive }) =>
                            `navbar-brand ${isActive ? 'active-brand' : 'inactive-brand'}`
                        }
                    >
                        Connor Dailey
                    </NavLink>
                    {/* Toggle Button for Small Screens */}
                    <button
                        className="navbar-toggler d-md-none ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* Icon for the toggle button */}
                        <i className="bi bi-list text-light"></i>
                    </button>
                    {/* Collapsible navigation section */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Render the Navigation component */}
                        <Navigation />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default memo(Header);
