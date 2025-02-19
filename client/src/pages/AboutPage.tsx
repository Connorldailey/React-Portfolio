import React from 'react';
import myImage from '../assets/images/portfolioImage.jpeg';
import { Link } from 'react-router-dom';
import Skill from '../components/Skill.js';

// Define SkillProps
interface SkillProps {
    title: string;
    icon: string;
    description: string;
}

// Core skills array
const skills: SkillProps[] = [
    {
        title: "Front-End Development",
        icon: "bi-filetype-jsx",
        description: "Expert in creating responsive, user-friendly interfaces using HTML5, CSS3, JavaScript ES6+, and React.",
    },
    {
        title: "Back-End Development",
        icon: "bi-database",
        description: "Proficient in server-side programming, building APIs, and working with databases using Node.js, Express, and SQL.",
    },
    {
        title: "Version Control",
        icon: "bi-file-earmark-diff",
        description: "Experienced in using Git and GitHub for version control, managing code changes, collaborating with teams, and maintaining project integrity.",
    },
    {
        title: "Adaptability & Growth Mindset",
        icon: "bi-graph-up-arrow",
        description: "Always learning and adapting to emerging technologies, including TypeScript, Bootstrap, and modern JavaScript frameworks.",
    },
];

const AboutPage: React.FC = () => {
    return (
        <section className='text-gray'>
            {/* About Me Section */}
            <h2 className="mb-0">About Me</h2>
            <div className="border-bottom">
                <div className="container">
                    <div className="row">
                        {/* Profile Image */}
                        <div className="col d-flex align-items-center">
                            <div className="my-3">
                                <img 
                                    src={myImage} 
                                    className="profile-image rounded-circle img-thumbnail" 
                                    alt="Self portrait"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        {/* Introduction Text */}
                        <div className="col-lg-10">
                            <p>
                                <strong className="fs-5">Welcome!</strong> I’m Connor Dailey, a Full-Stack Web Developer with a Bachelor’s in Mathematics 
                                and a certificate in Full Stack Web Development from The Ohio State University. I love tackling complex challenges by 
                                building practical, user-focused solutions with HTML, CSS, JavaScript, React, Node.js, and TypeScript. Whether it’s 
                                optimizing a front-end interface or crafting a robust back-end, I’m driven by continuous learning and the thrill of 
                                transforming big ideas into impactful applications. When I’m not coding, you’ll find me exploring ways to address 
                                real-world problems—from streamlining business workflows to envisioning more sustainable tech solutions.
                            </p>
                            <p>
                                Ready to build something extraordinary together? Let’s connect and create innovative products that move businesses—and the world—forward.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Core Skills Section */}
            <div className="border-bottom pt-3">
                <h3 className="mb-3">Core Skills</h3>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                        {/* Map over skills array to display each skill */}
                        {skills.map((skill, index) => (
                            <Skill 
                                key={index}
                                title={skill.title}
                                icon={skill.icon}
                                description={skill.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* Hobbies and Interests Section */}
            <div className="border-bottom pt-3">
                <h3>Hobbies and Interests</h3>
                <div className="p-3">
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
            </div>
            {/* Call to Action Section */}
            <div className="border-bottom pt-3">
                <h3 className="mb-0 ">Call to Action</h3>
                <div className="p-3">
                    <p>
                        <strong>Looking to Collaborate? </strong>
                        I’m always excited about potential collaborations and new opportunities to contribute to impactful projects. 
                        If you’re interested in working together, let’s connect! For inquiries, feedback, or just to say hello, 
                        feel free to reach out through my <Link to="/contact">Contact</Link> page. I’d love to hear from you!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
