export default function Resume() {
    return (
        <section>
            {/* Section title */}
            <h2>Resume</h2>
            {/* Link to download the resume PDF */}
            <p>Download <a href="/ConnorDailey-Resume(MASTER).pdf" download="ConnorDailey_Resume">my resume</a>.</p>
            {/* Front-End Proficiencies List */}
            <div>
                <h3>Front-End Proficiencies:</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            {/* Back-End Proficiencies List */}
            <div>
                <h3>Back-End Proficiencies:</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Servers</li>
                    <li>SQL</li>
                </ul>
            </div>
            {/* Additional Proficiencies List */}
            <div>
                <h3>Additional Proficiencies:</h3>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>TypeScript</li>
                </ul>
            </div>
        </section>
    );
}