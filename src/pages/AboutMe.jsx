import myImage from '../assets/images/portfolioImage.jpeg';
import { Link } from 'react-router-dom';

export default function AboutMe() {
    return (
        <section>
            <h2 className="mb-0">About Me</h2>
            <div className="border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col d-flex align-items-center">
                            <div className="my-3">
                                <img 
                                    src={myImage} 
                                    className="profile-image rounded-circle img-thumbnail" 
                                    alt="Self portrait"
                                />
                            </div>
                        </div>
                        <div className="col-lg-10">
                            {/* // Introduction section */}
                            <div className="">
                                <p>
                                    <strong className="fs-5">Welcome!</strong> I’m Connor Dailey, a full-stack web developer with a passion for creating meaningful, user-centered web applications. 
                                    With a solid foundation in mathematics and a keen interest in problem-solving, I am dedicated to building solutions that bridge 
                                    the gap between technology and real-world needs. Currently, I’m honing my skills in a Full Stack Web Development Bootcamp at 
                                    The Ohio State University, gaining hands-on experience with technologies like HTML5, CSS3, JavaScript ES6+, React, Node.js, and TypeScript.
                                </p>
                                <p>
                                    Beyond coding, I’m an avid learner and problem solver who thrives in collaborative environments. I’m constantly seeking new challenges that 
                                    push me to grow, whether it’s exploring sustainable technologies, diving into data analysis, or improving user experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // Core skills section */}
            <div className="border-bottom pt-3">
                <h3 className="mb-3">Core Skills</h3>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                        {/* // Front-end Development */}
                        <div className="col mb-4">
                            <div className="card h-100 skills-card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Front-End Development</h5>
                                    <div className="d-flex flex-column justify-content-between align-items-center">
                                        <i className="bi bi-filetype-jsx fs-1 skills-icon"></i>
                                        <p className="text-center mb-0">Expert in creating responsive, user-friendly interfaces using HTML5, CSS3, JavaScript ES6+, and React.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // Back-end development */}
                        <div className="col mb-4">
                            <div className="card h-100 skills-card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Back-End Development</h5>
                                    <div className="d-flex flex-column justify-content-between align-items-center">
                                        <i className="bi bi-database fs-1 skills-icon"></i>
                                        <p className="text-center mb-0">Proficient in server-side programming, building APIs, and working with databases using Node.js, Express, and SQL.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // Version Control */}
                        <div className="col mb-4">
                            <div className="card h-100 skills-card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Version Control</h5>
                                    <div className="d-flex flex-column justify-content-between align-items-center">
                                        <i className="bi bi-file-earmark-diff fs-1 skills-icon"></i>
                                        <p className="text-center mb-0">Experienced in using Git and GitHub for version control, managing code changes, collaborating with teams, and maintaining project integrity.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // Adaptability & Growth Mindset */}
                        <div className="col mb-4">
                            <div className="card h-100 skills-card">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Adaptability & Growth Mindset</h5>
                                    <div className="d-flex flex-column justify-content-between align-items-center">
                                        <i className="bi bi-graph-up-arrow fs-1 skills-icon"></i>
                                        <p className="text-center mb-0">Always learning and adapting to emerging technologies, including TypeScript, Bootstrap, and modern JavaScript frameworks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom pt-3">
                <h3>Hobbies and Interests</h3>
                <div className="p-3">
                    <p>
                        Outside of coding, I have a variety of interests that keep me grounded and inspired. 
                        I enjoy playing guitar, whether I'm learning a new song or just unwinding with a few chords. 
                        Archery is another passion of mine—it’s a practice that combines focus, patience, and precision, 
                        qualities I bring into my work as well.
                    </p>
                    <p>
                        I'm an avid nature explorer who loves immersing myself in the beauty of the outdoors—whether it's hiking, 
                        kayaking, or fishing, I’m always ready for the next adventure.
                        At home, I’m dedicated to caring for my growing collection of potted plants, which adds a bit of nature 
                        to my everyday environment. Most importantly, I cherish quality time with friends and family, as they 
                        keep me balanced and remind me of what truly matters.
                    </p>
                </div>
            </div>
            <div className="border-bottom pt-3">
                <h3 className="mb-0 ">Call to Action</h3>
                <div className="p-3">
                    <p>
                        <strong>Looking to Collaborate? </strong>
                        I’m always excited about potential collaborations and new opportunities to contribute to impactful projects. 
                        If you’re interested in working together, let’s connect! For inquiries, feedback, or just to say hello, 
                        feel free to reach out through my <Link to="/contact">Contact</Link> page. I’d love to hear from you!
                    </p>
                </div>
            </div>
        </section>
    );
}
