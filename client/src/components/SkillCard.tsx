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
        <div className="col mb-4">
            {/* Card to display skill information */}
            <div className="card h-100 skills-card">
                {/* Card body containing the skill content */}
                <div className="card-body">
                    {/* Skill title */}
                    <h5 className="skill-card-title text-center">{title}</h5>
                    {/* Skill icon and description section */}
                    <div className="d-flex flex-column justify-content-between align-items-center">
                        <i 
                            className={`bi ${icon} fs-1 skills-icon`}
                            aria-label={`${title} icon`}
                        ></i>
                        <p className="text-center mb-0">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;