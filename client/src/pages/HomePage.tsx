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
            {/* Intro Section*/}
            <section className="intro-section border-bottom">
                <p className='intro-text mb-1'>Hi, my name is</p>
                <h1 className='headline mb-2'>Connor Dailey.</h1>
                <div className=''>
                    <p className="subheadline mb-0">
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
            <section className='project-carousel-section border-bottom'>
                <ProjectCarousel projects={projectList} />
            </section>

            <section className="about-section border-bottom">
                <div className='about-content'>
                    <div className="text-content">
                        <p className="text-gray">
                            Based in Mount Vernon, OH, I’m a Full-Stack Web Developer who thrives on 
                            turning complexity into clean, user-focused solutions. Passionate about 
                            both innovation and simplicity, I believe every challenge is an opportunity 
                            to transform big ideas into elegant, minimalist applications. I’m committed 
                            to continuous learning, always pushing to craft efficient code that proves—less 
                            truly is more.
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
            </section>

            {/* Contact Section */}
            <section className='contact-section border-bottom'>
                <h3 className=''>Come say hello!</h3>
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