import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/footer.css'

const socialLinks = [
    { label: 'GitHub', icon: 'bi-github', url: 'https://github.com/connorldailey' },
    { label: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/connor-dailey-7a129b2b2/' },
    { label: 'Instagram', icon: 'bi-instagram', url: 'https://www.instagram.com/connorldailey' },
];

interface NavLinkItem {
    label: string;
    path: string;
}

const navLinks: NavLinkItem[] = [
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
];

const Footer: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (

        <footer className="custom-footer py-lg-5">
            <div className='d-flex flex-column flex-lg-row justify-content-lg-between align-items-center'>
                <div className='d-lg-flex align-items-center mt-3 mb-5 mt-lg-0 mb-lg-0'>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `navbar-brand ${isActive ? 'active-brand' : 'inactive-brand'}`
                        }
                    >
                        Connor Dailey
                    </NavLink>
                </div>
                
                <ul className="d-flex flex-column flex-lg-row align-items-center p-0 mb-5 mb-lg-0">
                    {navLinks.map(({ label, path }, index) => (
                        <li 
                            key={index} 
                            className={`nav-item ${index === navLinks.length ? '' : 'pb-3 pb-lg-0'}`}
                        >
                            <NavLink
                                to={path}
                                className={({ isActive }) => 
                                    `nav-link me-lg-4 ${isActive ? 'active' : 'inactive'}`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                    <li className='nav-link'>
                        <a 
                            className='resume-link' 
                            href="/ConnorDailey-Resume(MASTER).pdf" 
                            download="ConnorDailey_Resume"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                <div className="mb-3 mb-lg-0">
                    {socialLinks.map(({ label, icon, url }, index) => (
                        <button
                            key={index}
                            className={`footer-button ${index !== socialLinks.length - 1 ? "padding-right" : ""}`}
                            onClick={() => window.open(url, '_blank')}
                            aria-label={`${label} Profile`}
                        >
                            <i className={`${icon} fs-3`}></i>
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
