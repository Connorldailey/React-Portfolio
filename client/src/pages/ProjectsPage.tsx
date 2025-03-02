import ProjectCard from "../components/ProjectCard";
import projectList from "../data/projectList";
import '../styles/projectspage.css';

const ProjectsPage: React.FC = () => {
    return (
        <>

            {/* Intro Section */}
            <section className='projects-intro-section'>
                <div className='projects-intro-content'>
                    <h2 className="projects-heading">Check out my <span className='text-green'>projects</span></h2>
                    <p className="projects-intro-text">
                        Here you'll find a curated collection of digital experiences, 
                        each crafted to transform intricate challenges
                        into <span className='text-light'> elegant solutions</span>.
                        Dive in and explore the work that fuels my passion for building 
                        <span className='text-light'> intuitive, impactful technology</span>.
                    </p>
                </div>
            </section>

            <section className="projects-display-section">
                <p className='section-label'>My Projects</p>
                <div className='projects-display-content'>
                    {/* Map over the projects array to render each project */}
                    {projectList.map((project, index) => (
                        <div key={index}>
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
        </>
        
    );
}

export default ProjectsPage;