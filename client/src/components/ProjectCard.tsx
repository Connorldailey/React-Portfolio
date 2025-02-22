import React from 'react';

// Define the prop types for the Project component
interface ProjectProps {
    index: number;
    title: string;
    image: string;
    description: string;
    githubLink: string;
    deployedLink: string;
}

const colors = [
    '#067BC2',
    '#C89B7B',
    '#5D2E8C',
    '#A22522',
    '#33CA7F',
    '#EEABC4',
];

const ProjectCard: React.FC<ProjectProps> = ({ index, title, image, description, githubLink, deployedLink }) => {
    
    const backgroundColor = colors[index % colors.length];

    return (
        <>
            <div className={`card project-card`} style={{ backgroundColor }}>
                <div className='d-flex justify-content-between p-3 pb-0'>
                    <h1 className='card-title'>{title}</h1>
                    <div className="d-flex align-items-center">
                        {/* Button to view the GitHub repository */}
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-icon pe-3">
                            <i className="bi bi-github"></i>
                        </a>
                        {/* Button to view the deployed application */}
                        <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="link-icon">
                            <i className="bi bi-box-arrow-up-right"></i>
                        </a>
                    </div>
                </div>
                <div className='p-3'>
                    <img src={image} alt={title} className="img-fluid project-image" loading="lazy"/>
                </div>
                {/* Project image */}
                
            </div>
        </>
    )
}

export default ProjectCard;