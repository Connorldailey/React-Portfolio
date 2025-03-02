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
                        Welcome! I’m <span className='text-light'>Connor Dailey</span>, and I build digital 
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
                                I’m Connor Dailey, a Full-Stack Web Developer with a Bachelor’s in Mathematics 
                                and a certificate in Full Stack Web Development from The Ohio State University. I love tackling complex challenges by 
                                building practical, user-focused solutions with HTML, CSS, JavaScript, React, Node.js, and TypeScript. Whether it’s 
                                optimizing a front-end interface or crafting a robust back-end, I’m driven by continuous learning and the thrill of 
                                transforming big ideas into impactful applications.
                            </p>
                            <p>
                                Ready to build something extraordinary together? Let’s connect and create innovative products that move businesses—and the world—forward.
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
                    <p>
                        Outside of coding, I have a variety of interests that keep me grounded and inspired. 
                        I enjoy playing guitar, whether I'm learning a new song or just unwinding with a few chords. 
                        Archery is another passion of mine—it’s a practice that combines focus, patience, and precision, 
                        qualities I bring into my work as well.
                    </p>
                    <p>
                        I'm an avid nature explorer who loves immersing myself in the beauty of the outdoors—whether it's hiking, 
                        kayaking, or fishing, I’m always ready for the next adventure.
                        At home, I’m dedicated to caring for my growing collection of potted plants, which adds a bit of nature 
                        to my everyday environment. Most importantly, I cherish quality time with friends and family, as they 
                        keep me balanced and remind me of what truly matters.
                    </p>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="cta-section">
                <p className='section-label'>Call to Action</p>
                <div className="cta-content">
                    <p>
                        <strong className='text-light'>Looking to Collaborate? </strong>
                        I’m always excited about potential collaborations and new opportunities to contribute to impactful projects. 
                        If you’re interested in working together, let’s connect! For inquiries, feedback, or just to say hello, 
                        feel free to reach out through my <Link to="/contact">Contact</Link> page. I’d love to hear from you!
                    </p>
                </div>
            </section>

        </>
    );
};

export default AboutPage;
