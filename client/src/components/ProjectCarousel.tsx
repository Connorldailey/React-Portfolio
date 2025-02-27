import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import '../styles/projectcarousel.css';

interface Project {
    title: string;
    image: string;
    description: string;
    githubLink: string;
    deployedLink: string;
}

interface ProjectCarouselProps {
    projects: Project[];
}

const backgroundColors = [
    '#2DE1FC',
    '#F6BD60',
    '#33CA7F',
    '#5D2E8C',
    '#A22522',
]

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
    // Keep track of the currently active index
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    // A helper to determine the style for each card based on its index relative to the activeIndex
    const getCardStyle = (index: number) => {
        // Show the active card
        if (index === activeIndex) {
            return {
                transform: 'translateX(0) scale(1)',
                opacity: 1,
                zIndex: 1,
                backgroundColor: backgroundColors[index],
            };
        }
        // Determine left/right adjacent indices (wrap around if needed)
        const leftIndex = (activeIndex - 1 + projects.length) % projects.length;
        const rightIndex = (activeIndex + 1) % projects.length;

        if (index === leftIndex) {
            return {
                transform: 'translateX(-40%) scale(0.8)',
                opacity: 0.4,
                zIndex: 0,
                backgroundColor: backgroundColors[index],
            };
        }
        if (index === rightIndex) {
            return {
                transform: 'translateX(40%) scale(0.8)',
                opacity: 0.4,
                zIndex: 0,
                backgroundColor: backgroundColors[index],
            };
        }
        return {
            transform: 'translateX(0) scale(0.8)',
            opacity: 0,
            zIndex: -1,
            backgroundColor: backgroundColors[index],
        };
    };

    return (
        windowWidth > 768 ? (
            <div className="carousel-container">
                {/* Generate a hidden radio input for each project */}
                {projects.map((_, index) => (
                    <input
                        key={`radio-${index}`}
                        type="radio"
                        name="slider"
                        id={`item-${index}`}
                        checked={activeIndex === index}
                        onChange={() => setActiveIndex(index)}
                        style={{ display: 'none' }}
                    />
                ))}
                <div className="carousel-cards">
                    {projects.map((project, index) => (
                        <label
                            key={`card-${index}`}
                            className="carousel-card"
                            htmlFor={`item-${index}`}
                            onClick={() => setActiveIndex(index)}
                            style={getCardStyle(index)}
                        >   
                            <div className='card-header'>
                                <h3>
                                    <a 
                                        href={project.deployedLink}
                                        target='_blank' 
                                        rel="noopener noreferrer" 
                                    >
                                        {project.title}
                                    </a>
                                </h3>
                                <div>
                                    <a 
                                        href={project.githubLink} 
                                        target='_blank' 
                                        rel="noopener noreferrer" 
                                        className='github-icon'
                                    >
                                        <i className="bi bi-github" />
                                    </a>
                                    <a 
                                        href={project.deployedLink} 
                                        target='_blank' 
                                        rel="noopener noreferrer" 
                                        className='project-link-icon'
                                    >
                                        <i className="bi bi-box-arrow-up-left"></i>
                                    </a>
                                </div>
                            </div>
                            <div className='card-body'>
                                <img src={project.image} alt={project.title} />
                            </div>
                        </label>
                    ))}
                </div>
            </div>
        ) : (
            <>
                {projects.map((project, index) => (
                    <div className={index !== projects.length - 1 ? 'project-card-item' : ''}>
                        <ProjectCard
                            key={index}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            githubLink={project.githubLink}
                            deployedLink={project.deployedLink}
                        />
                    </div>
                    
                ))}
            </>
            
        )
        
    );
};

export default ProjectCarousel;

