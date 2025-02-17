import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkItem {
    label: string;
    path: string;
}

const navLinks: NavLinkItem[] = [
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
    { label: 'Resume', path: '/resume' },
];

function handleLinkClick() {
    // Remove blur
    document.body.classList.remove('blur-background');

    // Collapse the nav if it's open
    const navbarNav = document.getElementById('navbarNav');
    if (navbarNav && navbarNav.classList.contains('show')) {
        navbarNav.classList.remove('show');
    }
}

const Navigation: React.FC = () => {
    return (
        <ul className="navbar-nav ms-auto mt-4 mt-md-0">
            {navLinks.map(({ label, path }, index) => (
                <li key={index} className="nav-item mb-4 mb-md-0 ms-md-4">
                    <NavLink
                        to={path}
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'active' : 'inactive'}`
                        }
                        onClick={handleLinkClick}
                    >
                        {label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default memo(Navigation);



