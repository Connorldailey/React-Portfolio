import React, { memo, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import { useNavigation } from '../contexts/NavigationContext';
import '../styles/header.css';

const Header: React.FC = () => {
    const { menuOpen, setMenuOpen } = useNavigation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            // Remove blur if switching to desktop view.
            if (width > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setMenuOpen]);

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
    }

    const handleLinkClick = () => {
        setMenuOpen(false);
    }

    return (
        <header className="sticky-top">
            <nav className="custom-header navbar navbar-expand-md py-md-3 py-lg-4">
                <div className="container-fluid">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `navbar-brand ${isActive ? 'active-brand' : 'inactive-brand'}`
                        }
                    >
                        Connor Dailey
                    </NavLink>
                    {windowWidth < 768 ? (
                        <button
                            className="navbar-toggler ms-auto"
                            type="button"
                            onClick={handleMenuToggle}
                            aria-label="Toggle navigation"
                        >
                        <i
                            className={
                                menuOpen ? 'bi bi-x-lg text-light' : 'bi bi-list text-light'
                            }
                        ></i>
                        </button>
                    ) : (
                        <div className="nav-menu">
                            <Navigation onLinkClick={handleLinkClick} />
                        </div>
                    )}
                </div>
            </nav>
            {windowWidth < 768 && menuOpen && (
                <div className="nav-menu overlay">
                    <Navigation onLinkClick={handleLinkClick} />
                </div>
            )}
        </header>
      );
};

export default memo(Header);
