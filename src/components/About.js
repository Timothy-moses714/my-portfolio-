import React from 'react';
import picture from './image/profile.jpg'

const About = () => {
  return (
    <section className="pa4">
      <h2 className="f3">About Me</h2>
      <p>
        I’m Moses Timothy, a frontend developer, crafting web experience.
        I have a solid foundation in HTML, CSS, React, and Git. I'm passionate about building user-friendly web interfaces
        and continuously learning to improve my skills.
      </p>
      <div className="mt3">
        {}
        <div className="ba bw1 b--black-10 w4 h4 br-100 bg-light-gray center">
           <img src={picture} alt='picture'></img>
        </div>
        <p className="tc"></p>
      </div>
      
    </section>
    
  );
};

export default About;