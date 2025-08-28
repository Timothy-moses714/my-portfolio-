import React, { useRef } from 'react';
import picture from './image/profile.jpg';
import useScrollFade from './useScrollFade';

const About = () => {
  const aboutRef = useRef(null);
  useScrollFade(aboutRef);

  return (
    <section id="about" className="about-section animate-on-scroll" ref={aboutRef}>
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            HiI’m Moses Timothy, a pass frontend developer with a knack for crafting visually
            stunning and user-friendly digital experiences. With 6 month of experience in
            building responsive, interactive, and accessible web applications, i bring design to life 
            with clean  code and and keen eyes for detail. My experties spans HTML, CSS, JavaScript
            and popular frameworks like React. I'm dedicated  to staying up-to-date with the latest trends 
            and best practices in frontend development, and I'm always looking for ways to  improve my
            skills and deliver exceptional results. Let's build something amazing together  
          </p>
          <div className="skills">
            <label>HTML</label>
            <input type="range" min="0" max="100" value="80" readOnly />
            <label>CSS</label>
            <input type="range" min="0" max="100" value="75" readOnly />
            <label>JavaScript</label>
            <input type="range" min="0" max="100" value="65" readOnly />
            <label>React</label>
            <input type="range" min="0" max="100" value="45" readOnly />
            
          </div>
        </div>
        <div className="about-image">
          <img src={picture} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
