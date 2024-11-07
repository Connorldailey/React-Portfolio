import { useState } from 'react';

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

    return (
        <section>
            <h2>Contact</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <div className="col-lg-6 col-md-8 col-12">
                        <label htmlFor="nameInput" className="form-label">Name</label>
                        <input 
                            value={name}
                            name="nameInput"
                            onChange={handleInputChange}
                            type="text" 
                            className="form-control" 
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="col-lg-6 col-md-8 col-12">
                        <label htmlFor="emailInput" className="form-label">Email Address</label>
                        <input 
                            value={email}
                            name="emailInput"
                            onChange={handleInputChange}
                            type="email" 
                            className="form-control" 
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="col-lg-6 col-md-8 col-12">
                        <label htmlFor="messageInput" className="form-label">Message</label>
                        <textarea 
                            value={message}
                            name="messageInput"
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
        </section>
    );
}