interface Skill {
    title: string;
    icon: string;
    description: string;
}

const skillList: Skill[] = [
    {
        title: "Front-End Development",
        icon: "bi-filetype-jsx",
        description: "Skilled in crafting high-performance, responsive user interfaces with React and TypeScript. Proficient in modern CSS frameworks, accessibility best practices, and cross-browser optimization to enhance user experience.",
    },
    {
        title: "Back-End Development",
        icon: "bi-database",
        description: "Experienced in developing scalable server-side applications using Node.js and Express. Adept at designing RESTful APIs, managing relational and NoSQL databases, and implementing secure, efficient data handling strategies.",
    },
    {
        title: "Version Control",
        icon: "bi-file-earmark-diff",
        description: "Proficient in Git and GitHub workflows, ensuring effective version control, collaborative code management, and integration with CI/CD pipelines for robust project delivery.",
    },
    {
        title: "Adaptability & Growth Mindset",
        icon: "bi-graph-up-arrow",
        description: "Dedicated to continuous learning and professional growth. Quickly adapts to emerging technologies, frameworks, and methodologies to drive innovation and improve team efficiency.",
    },
];

export default skillList;