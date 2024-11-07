import myImage from '../assets/images/portfolioImage.jpeg';

export default function AboutMe() {
    return (
        <section>
            <h2 className="mb-0">About Me</h2>
            <div className="my-3">
                <img 
                    src={myImage} 
                    className="profile-image rounded-circle img-thumbnail" 
                    alt="Self portrait"
                />
            </div>
            <div>
                <p>
                    Full-stack web developer with a solid foundation in mathematics and a passion for solving real-world problems through technology. 
                    Currently completing a Full Stack Web Development certificate from The Ohio State University Coding Bootcamp, gaining proficiency 
                    in HTML5, CSS3, JavaScript ES6+, Node.js, TypeScript, Express, React, and more.
                </p>
                <p>
                    Adept at collaborating with cross-functional teams to build scalable web applications, and passionate about advancing sustainable technologies, 
                    particularly in renewable energy solutions. Committed to continuous learning and innovation, with hands-on experience developing real-time solar 
                    energy dashboards and educational platforms. Looking to leverage programming expertise and problem-solving skills to drive business success and 
                    make a positive impact in the tech industry.
                </p>
            </div>
        </section>
    );
}