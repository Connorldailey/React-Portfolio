import Navigation from './Navigation';

export default function Header() {
    return (
        <header className="header bg-dark text-light p-3">
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Connor Dailey</h1>
                    <Navigation />
                </div>
            </div>
        </header>
    );
}