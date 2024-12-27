import React from 'react';

const Footer: React.FC = () => {
    // Array of social links
    const socialLinks = [
        { label: 'GitHub', icon: 'bi-github', url: 'https://github.com/connorldailey' },
        { label: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/connor-dailey-7a129b2b2/' },
        { label: 'Instagram', icon: 'bi-instagram', url: 'https://www.instagram.com/connorldailey' },
    ];

    return (
        <footer className="p-3">
            <div className="container-fluid">
                <div className="d-flex justify-content-center">
                    {/* Map over social links */}
                    {socialLinks.map(({ label, icon, url }, index) => (
                        <button
                            key={index}
                            className="btn btn-lg mx-3 footer-icon"
                            onClick={() => window.open(url, '_blank')}
                            aria-label={`${label} Profile`}
                        >
                            <i className={`${icon} fs-1 text-light`}></i>
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
