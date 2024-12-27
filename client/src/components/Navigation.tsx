import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
    const navLinks = [
        { label: 'About Me', path: '/' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Contact', path: '/contact' },
        { label: 'Resume', path: '/resume' },
    ];

    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navLinks.map(({ label, path }, index) => (
                <li key={index} className="nav-item ms-lg-3">
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-light'}`}
                        to={path}
                    >
                        <div className="nav-hover">{label}</div>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Navigation;



