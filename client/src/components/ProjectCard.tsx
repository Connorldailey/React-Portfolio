import React from 'react';

interface ProjectProps {
    title: string;
    image: string;
    description: string;
    githubLink: string;
    deployedLink: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, image, description, githubLink, deployedLink }) => {
    return (
        <div className="card project-card bg-dark text-light">
            <div className="d-flex justify-content-between align-items-center p-3 pb-0">
                <h2 className="project-card-title">{title}</h2>
                <div className="d-flex align-items-center">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-icon pe-3">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="link-icon">
                        <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                </div>
            </div>
            <div className="p-3">
                <img src={image} alt={title} className="img-fluid project-image" loading="lazy" />
                <p className="mt-3 card-text">{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;