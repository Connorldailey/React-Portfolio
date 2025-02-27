import React, { useState, useEffect } from 'react';
import '../styles/carousel.css';

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
            };
        }
        if (index === rightIndex) {
            return {
                transform: 'translateX(40%) scale(0.8)',
                opacity: 0.4,
                zIndex: 0,
            };
        }
        // Hide or keep cards that are not adjacent (you can also add more logic here if you want to show more than two cards)
        return {
            transform: 'translateX(0) scale(0.8)',
            opacity: 0,
            zIndex: -1,
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
                        <img src={project.image} alt={project.title} />
                    </label>
                ))}
            </div>
        </div>
        ) : (
            <p>Testing</p>
        )
        
    );
};

export default ProjectCarousel;

