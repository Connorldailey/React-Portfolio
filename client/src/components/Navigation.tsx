import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkItem {
    label: string;
    path: string;
}

interface NavigationProps {
    onLinkClick: () => void;
}

const navLinks: NavLinkItem[] = [
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
];

const Navigation: React.FC<NavigationProps> = ({ onLinkClick }) => {
    return (
        <ul className="navbar-nav ms-auto mt-4 mt-md-0">
            {navLinks.map(({ label, path }, index) => (
                <li key={index} className="nav-item mb-4 mb-md-0 ms-md-4">
                    <NavLink
                        to={path}
                        className={({ isActive }) => 
                            `nav-link ${isActive ? 'active' : 'inactive'}`
                        }
                        onClick={onLinkClick}
                    >
                        {label}
                    </NavLink>
                </li>
            ))}
            <li className='nav-link mt-md-0 ms-0 ms-md-4'>
                <a className='resume-link' href="/ConnorDailey-Resume(MASTER).pdf" download="ConnorDailey_Resume">Resume</a>
            </li>
        </ul>
    );
};

export default memo(Navigation);



