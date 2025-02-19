import React, { useState, useEffect } from 'react';
import Project from "../components/Project";
import projectList from "../assets/projectList";

const specializations = ['web applications', 'digital solutions'];

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
            <section className="intro-section">
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
            <section className='border-top projects-section'>
                {/* Map over the projects array to render each project */}
                {projectList.map((project, index) => (
                    <Project
                        key={index}
                        index={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        githubLink={project.githubLink}
                        deployedLink={project.deployedLink}
                    />
                ))}
            </section>
        </>
    );
};

export default HomePage;