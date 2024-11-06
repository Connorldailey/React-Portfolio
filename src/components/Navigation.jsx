import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-light'}`} to="/">
                    About Me
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-light'}`} to="/portfolio">
                    Portfolio
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-light'}`} to="/contact">
                    Contact
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : 'text-light'}`} to="/resume">
                    Resume
                </NavLink>
            </li>
        </ul>
    );
}


