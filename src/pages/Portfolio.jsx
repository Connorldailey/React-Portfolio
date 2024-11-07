import Project from "../components/Project";

import trivialCodeImg from "../assets/images/trivialCode.png";
import weatherDashboardImg from "../assets/images/weatherDashboard.png";

export default function Portfolio() {
    // Define an array of project data
    const projects = [
        {
            title: 'Trivial Code',
            image: trivialCodeImg,
            description: "A spooky game to test your coding knowledge.",
            githubLink: 'https://github.com/Connorldailey/Trivial-Code',
            deployedLink: 'https://connorldailey.github.io/Trivial-Code/',
        },
        {
            title: 'Weather Dashboard',
            image: weatherDashboardImg,
            description: 'A simple 5 day weather dashboard.',
            githubLink: 'https://github.com/Connorldailey/Weather-Dashboard',
            deployedLink: 'https://module9-challenge-b2vj.onrender.com',
        },
        {
            title: 'Weather Dashboard',
            image: weatherDashboardImg,
            description: 'A simple 5 day weather dashboard.',
            githubLink: 'https://github.com/Connorldailey/Weather-Dashboard',
            deployedLink: 'https://module9-challenge-b2vj.onrender.com',
        },
        {
            title: 'Weather Dashboard',
            image: weatherDashboardImg,
            description: 'A simple 5 day weather dashboard.',
            githubLink: 'https://github.com/Connorldailey/Weather-Dashboard',
            deployedLink: 'https://module9-challenge-b2vj.onrender.com',
        },
        {
            title: 'Weather Dashboard',
            image: weatherDashboardImg,
            description: 'A simple 5 day weather dashboard.',
            githubLink: 'https://github.com/Connorldailey/Weather-Dashboard',
            deployedLink: 'https://module9-challenge-b2vj.onrender.com',
        },
        {
            title: 'Weather Dashboard',
            image: weatherDashboardImg,
            description: 'A simple 5 day weather dashboard.',
            githubLink: 'https://github.com/Connorldailey/Weather-Dashboard',
            deployedLink: 'https://module9-challenge-b2vj.onrender.com',
        },
    ];

    return (
        <section>
            <h2 className="mb-4">Portfolio</h2>
            <div className="container">
                <div className="row">
                    {projects.map((project, index) => (
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