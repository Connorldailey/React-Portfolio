export default function Footer() {

    const handleGitHubClick = () => {
        window.open("https://github.com/connorldailey" , "_blank");
    };

    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/connor-dailey-7a129b2b2/", "_blank");
    };

    const handleInstagramClick = () => {
        window.open("https://www.instagram.com/connorldailey", "_blank");
    };

    return (
        <footer className="bg-dark p-3">
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    <button className="btn btn-dark btn-lg" onClick={handleGitHubClick}>
                        <i className="bi bi-github"></i>
                    </button>
                    <button className="btn btn-dark btn-lg" onClick={handleLinkedInClick}>
                        <i className="bi bi-linkedin"></i>
                    </button>
                    <button className="btn btn-dark btn-lg" onClick={handleInstagramClick}>
                        <i className="bi bi-instagram"></i>
                    </button>
                </div>
            </div>
        </footer>
    );
}