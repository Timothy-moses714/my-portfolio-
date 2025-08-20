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
            I’m Moses Timothy, a frontend developer crafting user-friendly web experiences.
          </p>
          <div className="skills">
            <label>HTML</label>
            <input type="range" min="0" max="100" value="80" readOnly />
            <label>CSS</label>
            <input type="range" min="0" max="100" value="75" readOnly />
            <label>React</label>
            <input type="range" min="0" max="100" value="70" readOnly />
            <label>JavaScript</label>
            <input type="range" min="0" max="100" value="65" readOnly />
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
