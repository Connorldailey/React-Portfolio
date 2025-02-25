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

  return (
    <>
        <div id='projectCarousel' className='carousel slide carousel-fade'>
            <div className='carousel-indicators'>
                {projects.map((_project, index) => (
                    <button 
                        key={index}
                        type="button" 
                        data-bs-target="#projectCarousel" 
                        data-bs-slide-to={index} 
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : undefined}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
            <div className='carousel-inner'>
                {projects.map((project, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img 
                            src={project.image} 
                            className='d-block w-100' 
                            alt={`${project.title} image`} 
                        />
                        <div className="carousel-caption d-none d-md-block modern-caption">
                            <h5>{project.title}</h5>
                            <p>{project.description}</p>
                            <div className="d-flex justify-content-center">
                                {/* Button to view the GitHub repository */}
                                <a 
                                    href={project.githubLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="github-icon pe-3"
                                >
                                    <i className="bi bi-github"></i>
                                </a>
                                {/* Button to view the deployed application */}
                                <a 
                                    href={project.deployedLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="link-icon"
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button 
                className="carousel-control-prev" 
                type="button" 
                data-bs-target="#projectCarousel" 
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button 
                className="carousel-control-next" 
                type="button" 
                data-bs-target="#projectCarousel" 
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  );
};

export default ProjectCarousel;
