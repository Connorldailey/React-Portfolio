import Navigation from './Navigation';

export default function Header() {
    return (
        <header>
            {/* Navigation bar */}
            <nav className="navbar navbar-expand-lg navbar-dark p-4">
                <div className="container-fluid">
                    {/* Website title */}
                    <h1 className="text-light">Connor Dailey</h1>
                    {/* Toggle Button for Small Screens */}
                    <button
                        className="navbar-toggler d-lg-none ms-auto"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* Icon for the toggle button */}
                        <span className="navbar-toggler-icon"></span>
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
}
