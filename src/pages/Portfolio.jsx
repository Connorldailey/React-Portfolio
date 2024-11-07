import Project from "../components/Project";

import trivialCodeImg from "../assets/images/trivialCode.png";
import weatherDashboardImg from "../assets/images/weatherDashboard.png";

export default function Portfolio() {
    // Define an array of project data
    const projects = [
        {
            title: 'Trivial Code',
            image: trivialCodeImg,
            githubLink: 'https://github.com/Connorldailey/Trivial-Code',
            deployedLink: 'https://connorldailey.github.io/Trivial-Code/',
        },
        {
            title: 'Weather Dashboard',
            image: weatherDashboardImg,
            githubLink: 'https://github.com/Connorldailey/Weather-Dashboard',
            deployedLink: 'https://module9-challenge-b2vj.onrender.com',
        },
        {
            title: 'Weather Dashboard',
            image: weatherDashboardImg,
            githubLink: 'https://github.com/Connorldailey/Weather-Dashboard',
            deployedLink: 'https://module9-challenge-b2vj.onrender.com',
        },
        {
            title: 'Weather Dashboard',
            image: weatherDashboardImg,
            githubLink: 'https://github.com/Connorldailey/Weather-Dashboard',
            deployedLink: 'https://module9-challenge-b2vj.onrender.com',
        },
        {
            title: 'Weather Dashboard',
            image: weatherDashboardImg,
            githubLink: 'https://github.com/Connorldailey/Weather-Dashboard',
            deployedLink: 'https://module9-challenge-b2vj.onrender.com',
        },
        {
            title: 'Weather Dashboard',
            image: weatherDashboardImg,
            githubLink: 'https://github.com/Connorldailey/Weather-Dashboard',
            deployedLink: 'https://module9-challenge-b2vj.onrender.com',
        },
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="container">
                <div className="row">
                    {projects.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            image={project.image}
                            githubLink={project.githubLink}
                            deployedLink={project.deployedLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}