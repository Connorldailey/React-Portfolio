export default function Footer() {

    // Function to handle GitHub button click
    const handleGitHubClick = () => {
        window.open("https://github.com/connorldailey" , "_blank");
    };

    // Function to handle LinkedIn button click
    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/connor-dailey-7a129b2b2/", "_blank");
    };

    // Function to handle Instagram button click
    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/connorldailey", "_blank");
    };

    return (
        <footer className="p-3">
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    {/* GitHub Button */}
                    <button className="btn btn-lg mx-3 footer-icon" onClick={handleGitHubClick} aria-label="GitHub Profile">
                        <i className="bi bi-github fs-1 text-light"></i>
                    </button>
                    {/* LinkedIn Button */}
                    <button className="btn btn-lg mx-3 footer-icon" onClick={handleLinkedInClick} aria-label="LinkedIn Profile">
                        <i className="bi bi-linkedin fs-1 text-light"></i>
                    </button>
                    {/* Instagram Button */}
                    <button className="btn btn-lg mx-3 footer-icon" onClick={handleInstagramClick} aria-label="Instagram Profile">
                        <i className="bi bi-instagram fs-1 text-light"></i>
                    </button>
                </div>
            </div>
        </footer>
    );
}