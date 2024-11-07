export default function Project({ title, image, githubLink, deployedLink }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title mb-0">{title}</h5>
                    <img src={image} alt={title} className="img-fluid my-3"/>
                    <div className="d-flex justify-content-between">
                        <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View App
                        </a>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}