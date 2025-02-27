import trivialCodeImg from "../assets/images/trivialCode.png";
import culinaryCompassImg from "../assets/images/culinaryCompass.png";
import workoutTrackerImg from "../assets/images/workoutTracker.png";

interface Project {
    title: string;
    image: string;
    description: string;
    githubLink: string;
    deployedLink: string;
}

const projectList: Project[] = [
    {
        title: 'Trivial Code',
        image: trivialCodeImg,
        description: "A spooky game to test your coding knowledge.",
        githubLink: 'https://github.com/Connorldailey/Trivial-Code',
        deployedLink: 'https://connorldailey.github.io/Trivial-Code/',
    },
    {
        title: 'Culinary Compass',
        image: culinaryCompassImg,
        description: 'Explore meal ideas, access cooking instructions, and ask questions from an AI assistant.',
        githubLink: 'https://github.com/Connorldailey/Culinary-Compass.git',
        deployedLink: 'https://culinary-compass-8j0q.onrender.com/',
    },
    {
        title: 'Workout Tracker',
        image: workoutTrackerImg,
        description: 'Create exercise routines and track workout data.',
        githubLink: 'https://github.com/Connorldailey/Workout-Tracker',
        deployedLink: 'https://workout-tracker-iiuz.onrender.com',
    },
];

export default projectList;