export default function Project({ title, image, description, githubLink, deployedLink }) {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card square-card h-100">
                <div className="card-body p-0">
                    <img src={image} alt={title} className="img-fluid"/>
                    <div className="p-3">
                        <div className="border-bottom pb-3">
                            <h3 className="card-title mb-2">{title}</h3>
                            <p className="mb-0">
                                {description}
                            </p>
                        </div>
                        <div className="d-flex justify-content-between pt-3">
                            <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-50 me-3">
                                View App
                            </a>
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