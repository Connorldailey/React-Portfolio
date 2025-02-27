import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import React from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CONTACT } from '../utils/mutations';
import '../styles/contactpage.css';

const ContactPage: React.FC = () => {
    // State variable to store form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // State variable to manage success and error messages
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const [createContact] = useMutation(CREATE_CONTACT);

    // Function to handle changes to input fields
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setMessage(null);
    };

    // Function to handle form submission
    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            await createContact({
                variables: { ...formData },
            });
            // Show success message
            setMessage({ type: 'success', text: 'Form submission successful. Thanks for reaching out!' });
        } catch (error) {
            console.error(error);
            // Show error message
            setMessage({ type: 'error', text: 'Could not submit contact information. Please try again later.' });
        }

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <>
            {/* Contact form section */}
            <section className='contact-form-section'>
                <h2 className='text-light'>Contact</h2>
                {/* Form for collecting user input */}
                <form className="form p-0 p-md-3" onSubmit={handleFormSubmit}>
                    <div className="col-lg-6 col-md-8 col-12">
                        {/* Name Input Field */}
                        <div className="mb-3">
                            <label htmlFor="name-input" className="form-label">Name</label>
                            <input 
                                value={formData.name}
                                name="name"
                                id="name-input"
                                onChange={handleInputChange}
                                type="text" 
                                className="form-control" 
                                required
                            />
                        </div>
                        {/* Email Input Field */}
                        <div className="mb-3">
                            <label htmlFor="email-input" className="form-label">Email Address</label>
                            <input 
                                value={formData.email}
                                name="email"
                                id="email-input"
                                onChange={handleInputChange}
                                type="email" 
                                className="form-control" 
                                required
                            />
                        </div>
                        {/* Message Input Field */}
                        <div className="mb-3">
                            <label htmlFor="message-input" className="form-label">Message</label>
                            <textarea 
                                value={formData.message}
                                name="message"
                                id="message-input"
                                onChange={handleInputChange}
                                className="form-control" 
                                rows={5}
                                required
                            />
                        </div>
                        {/* Success or Error Message */}
                        {message && (
                            <div
                                className={`alert ${
                                    message.type === 'success' ? 'alert-success' : 'alert-danger'
                                }`}
                                role="alert"
                            >
                                {message.text}
                            </div>
                        )}
                        {/* Submit Button */}
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="submit-button">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default ContactPage;