interface Skill {
    title: string;
    icon: string;
    description: string;
}

const skillList: Skill[] = [
    {
        title: "Front-End Development",
        icon: "bi-filetype-jsx",
        description: "Expert in creating responsive, user-friendly interfaces using HTML5, CSS3, JavaScript ES6+, and React.",
    },
    {
        title: "Back-End Development",
        icon: "bi-database",
        description: "Proficient in server-side programming, building APIs, and working with databases using Node.js, Express, and SQL.",
    },
    {
        title: "Version Control",
        icon: "bi-file-earmark-diff",
        description: "Experienced in using Git and GitHub for version control, managing code changes, collaborating with teams, and maintaining project integrity.",
    },
    {
        title: "Adaptability & Growth Mindset",
        icon: "bi-graph-up-arrow",
        description: "Always learning and adapting to emerging technologies, including TypeScript, Bootstrap, and modern JavaScript frameworks.",
    },
];

export default skillList;