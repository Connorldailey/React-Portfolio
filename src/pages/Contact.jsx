import { useState } from 'react';

export default function Contact() {
    // State variables to store form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle changes to input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Update the corresponding state based on the input field name
        if (name === "nameInput") {
            setName(value);
        } else if (name === "emailInput") {
            setEmail(value);
        } else {
            setMessage(value);
        }
    }

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Show an alert with the entered form data (for testing purposes)
        alert(`${name}, ${email}, ${message}`);
        // Reset form fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section>
            {/* Contact form section */}
            <h2>Contact</h2>
            {/* Form for collecting user input */}
            <form className="form" onSubmit={handleFormSubmit}>
                {/* Name Input Field */}
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
                {/* Email Input Field */}
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
                {/* Message Input Field */}
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
                {/* Submit Button */}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            {/* Note to inform users that the contact form is under development */}
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