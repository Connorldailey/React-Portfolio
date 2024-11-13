export default function Skill({ title, icon, description }) {
    return (
        <div className="col mb-4">
            <div className="card h-100 skills-card">
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <div className="d-flex flex-column justify-content-between align-items-center">
                        <i className={`bi ${icon} fs-1 skills-icon`}></i>
                        <p className="text-center mb-0">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}