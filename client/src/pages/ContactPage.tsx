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
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

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
            setMessage({ type: 'success', text: 'Message reveived. Thanks for reaching out!' });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        } catch (error) {
            console.error(error);
            // Show error message
            setMessage({ type: 'error', text: 'Whoops, we hit a snag. Please try again later.' });
        }

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <>
            <section className='contact-methods-section'>
                {/* Contact page opening message */}
                <div className='contact-message'>
                    <h2 className='contact-heading'>Let's get in <span className='text-green'>contact</span></h2>
                    <p className='contact-intro-text'>
                         <span className='text-highlight'>Say hello</span> and let’s create something amazing together! 
                        Whether it’s a quick question or a detailed project 
                        discussion, <span className='text-highlight'>I look forward to connecting with you.</span>
                    </p>
                </div>
                {/* Container for form and social links */}
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <form onSubmit={handleFormSubmit}>
                                {/* Name Input Field */}
                                <div className="input-group">
                                    <label htmlFor="name-input" className="input-label">Name</label>
                                    <input 
                                        value={formData.name}
                                        name="name"
                                        id="name-input"
                                        onChange={handleInputChange}
                                        type="text" 
                                        required
                                    />
                                </div>
                                {/* Email Input Field */}
                                <div className="input-group">
                                    <label htmlFor="email-input" className="input-label">Email Address</label>
                                    <input 
                                        value={formData.email}
                                        name="email"
                                        id="email-input"
                                        onChange={handleInputChange}
                                        type="email" 
                                        required
                                    />
                                </div>
                                {/* Message Input Field */}
                                <div className="input-group">
                                    <label htmlFor="message-input" className="input-label">Message</label>
                                    <textarea 
                                        value={formData.message}
                                        name="message"
                                        id="message-input"
                                        onChange={handleInputChange}
                                        rows={5}
                                        required
                                    />
                                </div>
                                
                                {/* Submit Button */}
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="submit-button">
                                        Submit
                                    </button>
                                </div>
                        </form>
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className='social-links'>
                            <div className='social-link bottom-margin'>
                                <button
                                    className='social-button'
                                    onClick={() => window.open('https://github.com/connorldailey', '_blank')}
                                >
                                    <i className='bi-github'></i>
                                </button>
                                <div className='social-label-container'>
                                    <h4 className='social-label'>GitHub</h4>
                                    <p className='social-at'>@connorldailey</p>
                                </div>
                            </div>
                            <div className='social-link bottom-margin'>
                                <button
                                    className='social-button'
                                    onClick={() => window.open('https://www.linkedin.com/in/connor-dailey-7a129b2b2/', '_blank')}
                                >
                                    <i className='bi-linkedin'></i>
                                </button>
                                <div className='social-label-container'>
                                    <h4 className='social-label'>LinkedIn</h4>
                                    <p className='social-at'>@connorldailey</p>
                                </div>
                            </div>
                            <div className='social-link'>
                                <button
                                    className='social-button'
                                    onClick={() => window.open('https://www.instagram.com/connorldailey', '_blank')}
                                >
                                    <i className='bi-instagram'></i>
                                </button>
                                <div className='social-label-container'>
                                    <h4 className='social-label'>Instagram</h4>
                                    <p className='social-at'>@connorldailey</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Success or Error Message */}
                <div className='form-message-container'>
                    {message && message.type === 'success' ? (
                        <div
                            className='message-success'
                            role="alert"
                        >
                            <span className='text-green'>{`${message.text.split('.')[0]}. `}</span>
                            <span>{message.text.split('.')[1]}</span>
                        </div>
                    ) : message && (
                        <div
                            className='message-error'
                            role="alert"
                        >
                            <span className='text-red'>{`${message.text.split('.')[0]}. `}</span>
                            <span>{message.text.split('.')[1]}</span>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ContactPage;