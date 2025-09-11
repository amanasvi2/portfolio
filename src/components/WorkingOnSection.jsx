import React, { useState } from 'react';
import { Github, ExternalLink, Tag, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ project, isHovered, onHover, onLeave }) => {
  const { currentTheme } = useTheme();

  return (
    <div
      className={`rounded-xl shadow-sm overflow-hidden transition-all duration-300 transform ${
        isHovered ? 'scale-[1.02] shadow-md' : ''
      } ${currentTheme.background.secondary}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className={`text-xl font-bold ${currentTheme.text.primary}`}>{project.title}</h3>
          <div className="flex space-x-3">
            {project.github && (
              <a href={project.github} className={`${currentTheme.text.secondary} hover:${currentTheme.text.accent} transition-colors`}>
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a href={project.live} className={`${currentTheme.text.secondary} hover:${currentTheme.text.accent} transition-colors`}>
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className={`mt-3 ${currentTheme.text.secondary}`}>{project.description}</p>

        {/* Key Features */}
        <div className="mt-4 space-y-2">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start">
              <Code2 className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
              <p className={`${currentTheme.text.secondary} text-sm`}>{feature}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center px-3 py-1 ${currentTheme.background.accent} ${currentTheme.text.accent} rounded-full text-sm`}
              >
                <Tag className="w-3 h-3 mr-1" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkingOnSection = () => {
  const { currentTheme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Aux AI",
      description: "A collaborative music platform that generates playlists based on the combined tastes of friends.",
      features: [
        "Auto-DJ Playlist Generation: Creates playlists based on friends' music preferences.",
        "Simple voting system to shape the queue.",
        "Spotify Integration: Syncs with Spotify for seamless playback."
      ],
      technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "Spofity API"],
      //github: "https://github.com/Nishchaypat/Athlyze",
      //live: ""
    }
  ];

  return (
    <section id="workingon" className={`py-20 ${currentTheme.background.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold ${currentTheme.text.primary} sm:text-4xl`}>Currently Building</h2>
          <p className={`mt-4 text-lg ${currentTheme.text.secondary}`}>
            A collection of my current projects and what I'm working on
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingOnSection;