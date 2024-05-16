"use client";
import { useState } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
    const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setGradientPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setGradientPosition({ x: 0, y: 0 });
    };

    return (
        <div
            className="group bg-white shadow-md p-4 rounded-lg mb-4 transition duration-300 ease-in-out transform hover:-translate-y-1 relative overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="absolute inset-0 transition-all duration-300 ease-in-out"
                style={{
                    background: gradientPosition.x === 0 && gradientPosition.y === 0
                        ? 'white'
                        : `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.2))`,
                    transition: 'background 0.3s ease-in-out'
                }}
            ></div>
            <div className="relative z-10">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
