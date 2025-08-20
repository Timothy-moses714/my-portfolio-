import React, { useRef } from 'react';
import useScrollFade from './useScrollFade';

const Projects = () => {
  const projectsRef = useRef(null);
  useScrollFade(projectsRef);

  const projectData = [
    { title: 'Community Help App', desc: 'Connects local communities', tech: 'HTML, CSS' },
    { title: 'E-Commerce Website (Team)', desc: 'Team project frontend', tech: 'HTML, CSS' },
    { title: 'E-Commerce Website (Solo)', desc: 'Personal version', tech: 'HTML, CSS' },
    { title: 'RoboFriends App', desc: 'Fetches robot profiles using API', tech: 'React, API, CSS' },
  ];

  return (
    <section id="projects" className="projects-section animate-on-scroll" ref={projectsRef}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span><strong>Tech:</strong> {project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
