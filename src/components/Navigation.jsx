import { Link } from 'react-router-dom';

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
                            <Link key={1} className="nav-link text-light me-3" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link key={2} className="nav-link text-light me-3" to="/about">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link key={3} className="nav-link text-light me-3" to="/portfolio">
                                Portfolio  
                            </Link>
                        </li>
                        <li>
                            <Link key={4} className="nav-link text-light me-3" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link key={5} className="nav-link text-light" to="/resume">
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}