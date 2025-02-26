import ProjectCard from "../components/ProjectCard";
import projectList from "../assets/projectList";

const ProjectsPage: React.FC = () => {
    return (
        <section className="projects-section text-gray">
            <h2 className="text-light mb-4">Portfolio</h2>
            <div className="row">
                {/* Map over the projects array to render each project */}
                {projectList.map((project, index) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                        <ProjectCard
                            title={project.title}
                            image={project.image}
                            description={project.description}
                            githubLink={project.githubLink}
                            deployedLink={project.deployedLink}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsPage;