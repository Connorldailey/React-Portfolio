import React from 'react';
import portfolioImg from '../assets/images/portfolioImage.jpeg';
import { Link } from 'react-router-dom';
import SkillCard from '../components/SkillCard.js';
import '../styles/aboutpage.css';
import skillList from '../data/skillList.js';


const AboutPage: React.FC = () => {
    return (
        <>  

            {/* Intro Section */}
            <section className='about-intro-section'>
                <div className='about-intro-content'>
                    <h2 className="about-heading">Get to know <span className='text-green'>me</span></h2>
                    <p className="about-intro-text">
                        Welcome! I'm <span className='text-light'>Connor Dailey</span>, and I build digital 
                        experiences that make complex ideas simple. Armed with a degree in Mathematics and 
                        specialized web development training, I thrive on crafting both elegant 
                        <span className='text-light'> front-end interfaces</span> and robust 
                        <span className='text-light'> back-end systems.</span>
                    </p>
                </div>
            </section>
            
            {/* About Info Section */}
            <section className='about-info-section'>
                <p className='section-label'>About Me</p>
                <div className='about-info-content'>
                    <div className='about-info-text'>
                        <div className="about-text-content">
                            <p>
                                I'm Connor Dailey, a Full-Stack Web Developer with a Bachelor's in Mathematics 
                                and a certificate in Full Stack Web Development from The Ohio State University. I love tackling complex challenges by 
                                building practical, user-focused solutions with Typescript, React, and Node.js. Whether it's 
                                creating a stunning front-end interface or crafting a robust back-end, I'm driven by continuous learning and the thrill of 
                                transforming big ideas into impactful applications.
                            </p>
                            <p>
                                Ready to build something extraordinary together? Let's connect and create innovative products that move businesses—and the world—forward.
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
                </div>
            </section>

            {/* Core Skills Section */}
            <section className='core-skills-section'>
                <p className='section-label'>Core Skills</p>
                <div className="core-skills-content">
                    {/* Map over skills array to display each skill */}
                    {skillList.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            title={skill.title}
                            icon={skill.icon}
                            description={skill.description}
                        />
                    ))}
                </div>
            </section>

            {/* Hobbies and Interests Section */}
            <section className="hobbies-interests-section">
                <p className='section-label'>Hobbies and Interests</p>
                <div className='hobbies-interests-content'>
                    <div className="hobby-item">
                        <div className="hobby-icon">
                            <i className="bi bi-music-note-beamed"></i>
                        </div>
                        <div className="hobby-text">
                            <h3>Music</h3>
                            <p>Playing guitar, whether I'm learning a new song or just unwinding with a few chords.</p>
                        </div>
                    </div>
                    <div className="hobby-item">
                        <div className="hobby-icon">
                            <i className="bi bi-bullseye"></i>
                        </div>
                        <div className="hobby-text">
                            <h3>Archery</h3>
                            <p>A practice that combines focus, patience, and precision—qualities I bring into my work.</p>
                        </div>
                    </div>
                    <div className="hobby-item">
                        <div className="hobby-icon">
                            <i className="bi bi-tree"></i>
                        </div>
                        <div className="hobby-text">
                            <h3>Nature Exploration</h3>
                            <p>Hiking, kayaking, and fishing adventures that keep me connected to the outdoors.</p>
                        </div>
                    </div>
                    <div className="hobby-item">
                        <div className="hobby-icon">
                            <i className="bi bi-flower1"></i>
                        </div>
                        <div className="hobby-text">
                            <h3>Plant Care</h3>
                            <p>Cultivating a collection of potted plants that bring nature into my everyday environment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <p className='section-label'>Call to Action</p>
                <div className="cta-content">
                    <p>
                        <strong className='text-light'>Looking to Collaborate? </strong>
                        I'm always excited about potential collaborations and new opportunities to contribute to impactful projects. 
                        If you're interested in working together, let's connect! For inquiries, feedback, or just to say hello, 
                        feel free to reach out through my <Link to="/contact">Contact</Link> page. I'd love to hear from you!
                    </p>
                </div>
            </section>

        </>
    );
};

export default AboutPage;
