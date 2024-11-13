export default function Project({ title, image, description, githubLink, deployedLink }) {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            {/* Card component to display project information */}
            <div className="card square-card h-100">
                {/* Card body */}
                <div className="card-body p-0">
                    {/* Project image */}
                    <img src={image} alt={title} className="img-fluid"/>
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