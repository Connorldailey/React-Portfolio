import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCarousel from "../components/ProjectCarousel";
import projectList from "../data/projectList";
import portfolioImg from '../assets/images/portfolioImage.jpeg';
import '../styles/homepage.css';

const specializations = [
    'web applications', 
    'digital solutions',
    'user-driven experiences',
    'scalable platforms',
    'innovative interfaces'
];

const HomePage: React.FC = () => {
    const [currentText, setCurrentText] = useState<string>(specializations[0]);
    const [prevText, setPrevText] = useState<string | null>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentText((prev) => {
                setPrevText(prev);
                const currentIndex = specializations.indexOf(prev);
                const nextIndex = (currentIndex + 1) % specializations.length;
                return specializations[nextIndex];
            })
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (prevText !== null) {
            const timeoutId = setTimeout(() => {
                setPrevText(null);
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    })

    return (
        <>
            {/* Intro Section */}
            <section className="intro-section">
                <div className='intro-content'>
                    <p className='intro-text'>Hi, my name is</p>
                    <h1 className='headline'>Connor Dailey.</h1>
                    <p className="subheadline">
                        I'm a Full-Stack developer focused on creating crisp and cutting-edge{' '}
                    </p>
                    <div className="dynamic-text-container">
                        {prevText && (
                            <p key={`prev-${prevText}`} className="dynamic-text slide-up-high">{prevText}.</p>
                        )}
                        <p key={`current-${currentText}`} className="dynamic-text slide-up-low">{currentText}.</p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className='project-carousel-section'>
                <div className='project-carousel-content'>
                    <p className='section-label'>Projects</p>
                    <ProjectCarousel projects={projectList} />
                </div>
            </section>
            
            {/* About Section */}
            <section className="about-section">
                <div className="about-content">
                    <p className='section-label'>About Me</p>
                    <div className='about-text'>
                        <div className="text-content">
                            <p>
                                Based in Mount Vernon, OH, I’m a <span className='text-highlight'>Full-Stack Web Developer</span> who 
                                thrives on turning complex problems into clean, user-focused solutions. Passionate about both 
                                innovation and simplicity, I believe every challenge is an opportunity to transform big ideas into 
                                elegant, minimalist applications. I’m committed to continuous learning, always pushing to craft 
                                efficient code that proves—<span className='text-highlight'>less truly is more</span>.
                            </p>
                        </div>
                        <div className="image-content">
                            <img 
                                src={portfolioImg} 
                                className="portfolio-image"
                                alt="Portfolio Image" 
                            />
                        </div>
                    </div>
        
                    <div className='about-button'>
                        <Link 
                            to='/about'
                            className='homepage-link'
                        >
                            <div className='d-flex'>
                                <span className='pe-2'>About</span>
                                <i className="bi bi-link page-link-icon"></i>
                            </div>
                            
                        </Link>
                    </div>
                </div>
                
            </section>

            {/* Contact Section */}
            <section className='contact-section'>
                <p className='section-label'>Contact</p>
                <p className='contact-section-text'>
                    <span className='text-white'>Ready to Collaborate?</span> Drop me a message and let’s explore how 
                    we can turn your vision into reality.
                </p>
                <div className='contact-button'>
                    <Link 
                        to='/contact'
                        className='homepage-link'
                    >
                        <div className='d-flex'>
                            <span className='pe-2'>Contact</span>
                            <i className="bi bi-link page-link-icon"></i>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;