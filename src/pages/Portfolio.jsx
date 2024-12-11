import Project from "../components/Project";

// Import project images
import trivialCodeImg from "../assets/images/trivialCode.png";
import weatherDashboardImg from "../assets/images/weatherDashboard.png";
import culinaryCompass from "../assets/images/culinaryCompass.png";
import defaultPageImg from "../assets/images/defaultPage.jpeg";

export default function Portfolio() {
    // Define an array of project data to display in the portfolio
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
            title: 'Culinary Compass',
            image: culinaryCompass,
            description: 'Explore meal ideas, access cooking instructions, and ask questions from an AI assistant.',
            githubLink: 'https://github.com/Connorldailey/Culinary-Compass.git',
            deployedLink: 'https://culinary-compass-8j0q.onrender.com/',
        },
        {
            title: 'Project Coming Soon',
            image: defaultPageImg,
            description: 'Exciting new projects are coming soon. Stay tuned for updates!',
            githubLink: '#',
            deployedLink: '#',
        },
        {
            title: 'Project Coming Soon',
            image: defaultPageImg,
            description: 'Exciting new projects are coming soon. Stay tuned for updates!',
            githubLink: '#',
            deployedLink: '#',
        },
        {
            title: 'Project Coming Soon',
            image: defaultPageImg,
            description: 'Exciting new projects are coming soon. Stay tuned for updates!',
            githubLink: '#',
            deployedLink: '#',
        },
    ];

    return (
        <section>
            {/* Portfolio section header */}
            <h2 className="mb-4">Portfolio</h2>
            {/* Container for the project cards */}
            <div className="container">
                <div className="row">
                    {/* Map over the projects array to render each project */}
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