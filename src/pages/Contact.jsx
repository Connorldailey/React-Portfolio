import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "nameInput") {
            setName(value);
        } else if (name === "emailInput") {
            setEmail(value);
        } else {
            setMessage(value);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`${name}, ${email}, ${message}`);
        
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/connor-dailey-7a129b2b2/", "_blank");
    };

    return (
        <section>
            <h2>Contact</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <div className="col-lg-6 col-md-8 col-12">
                        <label htmlFor="name-input" className="form-label">Name</label>
                        <input 
                            value={name}
                            name="nameInput"
                            id="name-input"
                            onChange={handleInputChange}
                            type="text" 
                            className="form-control" 
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="col-lg-6 col-md-8 col-12">
                        <label htmlFor="email-input" className="form-label">Email Address</label>
                        <input 
                            value={email}
                            name="emailInput"
                            id="email-input"
                            onChange={handleInputChange}
                            type="email" 
                            className="form-control" 
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="col-lg-6 col-md-8 col-12">
                        <label htmlFor="message-input" className="form-label">Message</label>
                        <textarea 
                            value={message}
                            name="messageInput"
                            id="message-input"
                            onChange={handleInputChange}
                            type="text" 
                            className="form-control" 
                            rows="5"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            <div className="pt-3">
                <p>
                    Note: The contact form is currently under development and is not yet functional. 
                    Please check back soon or reach out via my <a 
                        className="link cursor-pointer" 
                        href="https://www.linkedin.com/in/connor-dailey-7a129b2b2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a> profile for any inquiries in the meantime. Thank you for your patience!
                </p>
            </div>
        </section>
    );
}