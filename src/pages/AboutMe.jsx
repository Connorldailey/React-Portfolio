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
            {/* // Introduction section */}
            <div className="border-bottom">
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
            {/* // Core skills section */}
            <div className="border-bottom pt-3">
                <h3 className="mb-3">Core Skills</h3>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                        {/* // Front-end Development */}
                        <div className="col mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Front-End Development</h5>
                                    <div className="d-flex flex-column justify-content-between align-items-center">
                                        <i className="bi bi-filetype-jsx fs-1"></i>
                                        <p className="text-center mb-0">Expert in creating responsive, user-friendly interfaces using HTML5, CSS3, JavaScript ES6+, and React.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // Back-end development */}
                        <div className="col mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Back-End Development</h5>
                                    <div className="d-flex flex-column justify-content-between align-items-center">
                                        <i className="bi bi-database fs-1"></i>
                                        <p className="text-center mb-0">Proficient in server-side programming, building APIs, and working with databases using Node.js, Express, and SQL.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // Version Control */}
                        <div className="col mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Version Control</h5>
                                    <div className="d-flex flex-column justify-content-between align-items-center">
                                        <i className="bi bi-file-earmark-diff fs-1"></i>
                                        <p className="text-center mb-0">Proficient in server-side programming, building APIs, and working with databases using Node.js, Express, and SQL.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // Adaptability & Growth Mindset */}
                        <div className="col mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Adaptability & Growth Mindset</h5>
                                    <div className="d-flex flex-column justify-content-between align-items-center">
                                        <i className="bi bi-graph-up-arrow fs-1"></i>
                                        <p className="text-center mb-0">Always learning and adapting to emerging technologies, including TypeScript, Bootstrap, and modern JavaScript frameworks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
<div className="d-flex">
                    <div classsName="card">
                        
                    </div>
                </div>