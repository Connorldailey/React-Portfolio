import Navigation from './Navigation';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
                <div className="container-fluid">
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
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Navigation */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <Navigation />
                    </div>
                </div>
            </nav>
        </header>
    );
}
