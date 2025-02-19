import React from 'react';

// Define the prop types for the Project component
interface ProjectProps {
    title: string;
    index: number;
    image: string;
    description: string;
    githubLink: string;
    deployedLink: string;
}

const Project: React.FC<ProjectProps> = ({ index, title, image, description, githubLink, deployedLink }) => {
    return (
        <div className={index < 5 ? 'pb-4' : ''}>
            <div className={`card project-card main-background `}>
                {/* Card body */}
                <div className="card-body p-0">
                    {/* Project image */}
                    <img src={image} alt={title} className="img-fluid project-image" loading="lazy"/>
                    {/* Card content area */}
                    <div className="p-3">
                        <div className="border-bottom pb-3">
                            {/* Project title */}
                            <h3 className="card-title mb-2">{title}</h3>
                            {/* Project description */}
                            <p className="mb-0">
                                {description}
                            </p>
                        </div>
                        {/* Links to the deployed app and GitHub repository */}
                        <div className="d-flex justify-content-between pt-3">
                            {/* Button to view the deployed application */}
                            <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-50 me-3">
                                View App
                            </a>
                            {/* Button to view the GitHub repository */}
                            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-50">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;