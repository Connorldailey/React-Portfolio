import Project from "../components/Project";
import projectList from "../assets/projectList";

const ProjectsPage: React.FC = () => {
    return (
        <section className="text-gray">
            {/* Portfolio section header */}
            <h2 className="mb-4">Portfolio</h2>
            {/* Container for the project cards */}
            <div className="container">
                <div className="row">
                    {/* Map over the projects array to render each project */}
                    {projectList.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            githubLink={project.githubLink}
                            deployedLink={project.deployedLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsPage;