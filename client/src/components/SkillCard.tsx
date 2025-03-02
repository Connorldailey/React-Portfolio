import React from 'react';
import '../styles/skillcard.css';

// Define the prop types for the Skill component
interface SkillProps {
    title: string;
    icon: string;
    description: string;
}

const SkillCard: React.FC<SkillProps> = ({ title, icon, description }) => {
    return (
        <div className="skills-card">
            <h5 className="skill-card-title">{title}</h5>
            <div className="icon-container">
                <i 
                    className={`bi ${icon} skill-card-icon`}
                    aria-label={`${title} icon`}
                ></i>
            </div>
            <p className="skill-card-text">{description}</p>

        </div>
    );
};

export default SkillCard;