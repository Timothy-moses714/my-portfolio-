import React, { useRef } from 'react';
import useScrollFade from './useScrollFade';
import helphub from './image/helphub.png'
import solo from './image/solo.png' 
import team from './image/team.png';
import robo from './image/robo.png'; 
import weather from './image/weather.png';
import recipe from './image/recipe.png';
import netflix from './image/netflix.png';

const Projects = () => {
  const projectsRef = useRef(null);
  useScrollFade(projectsRef);

  const projectData = [
    { 
      title: 'Community Help App',
      image: helphub, 
      desc: 'Connects local communities', 
      link: 'https://helphup-project.vercel.app/'
    },
    { 
      title: 'E-Commerce Website (Team)', 
      image: team,
      desc: 'Team project frontend',
      link: 'https://student-project-sand.vercel.app/'
    },
    { 
      title: 'E-Commerce Website (Solo)', 
      image: solo,
      desc: 'Personal version',
      link: 'https://e-commerce-project-five-theta.vercel.app/'
    },
    { 
      title: 'RoboFriends App', 
      image: robo,
      desc: 'Fetches robot profiles using API', 
      link: 'https://robo-friends-nine-omega.vercel.app/'
    },
    { 
      title: 'Weather App', 
      image: weather,
      desc: 'Fetches API from OpenWeather',
      link: 'https://weather-app-delta-mauve-28.vercel.app/'
    },
    { 
      title: 'Recipe App', 
      image: recipe,
      desc: 'Fetches meals using MealDB API', 
      link: 'https://recipe-app-sigma-rose.vercel.app/'
    },
    { 
      title: 'Netflix Clone', 
      image: netflix,
      desc: 'Movie app for entertainment',
      link: 'https://netflix-clone-hazel-rho.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="projects-section animate-on-scroll" ref={projectsRef}>
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <br />
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
