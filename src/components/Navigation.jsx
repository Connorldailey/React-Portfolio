import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* // Add toggle button for collapsing navbar */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* // Collapsible navbar links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink key={1} className={({ isActive }) => `nav-link me-3 ${isActive ? 'active' : 'text-light'}`} to="/">
                                About Me
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink key={2} className={({ isActive }) => `nav-link me-3 ${isActive ? 'active' : 'text-light'}`} to="/portfolio">
                                Portfolio  
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink key={3} className={({ isActive }) => `nav-link me-3 ${isActive ? 'active' : 'text-light'}`} to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink key={4} className={({ isActive }) => `nav-link me-3 ${isActive ? 'active' : 'text-light'}`} to="/resume">
                                Resume
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}