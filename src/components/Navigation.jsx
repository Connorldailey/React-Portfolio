import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Navigation link for "About Me" page */}
            <li className="nav-item ms-lg-3">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-light'}`} to="/">
                    <div className="nav-hover">
                        About Me
                    </div>
                </NavLink>
            </li>
            {/* Navigation link for "Portfolio" page */}
            <li className="nav-item ms-lg-3">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-light'}`} to="/portfolio">
                    <div className="nav-hover">
                        Portfolio
                    </div>
                </NavLink>
            </li>
            {/* Navigation link for "Contact" page */}
            <li className="nav-item ms-lg-3">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-light'}`} to="/contact">
                    <div className="nav-hover">
                        Contact
                    </div>
                </NavLink>
            </li>
            {/* Navigation link for "Resume" page */}
            <li className="nav-item ms-lg-3">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-light'}`} to="/resume">
                    <div className="nav-hover">
                        Resume
                    </div>
                </NavLink>
            </li>
        </ul>
    );
}


