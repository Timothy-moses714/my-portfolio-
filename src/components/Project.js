import React from 'react';

const Projects = () => {
  return (
    <section className="">
      <h2 className="f3 ">Projects</h2>

      <div className="mv3  bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
        <h3 className="f4">Community Help App</h3>
        <p>Basic HTML & CSS personal project. My first project to help local communities connect.</p>
        <p><strong>Tech:</strong> HTML, CSS</p>
      </div>

      <div className="mv3 bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
        <h3 className="f4">E-Commerce Website (Team Project)</h3>
        <p>Worked with a team using HTML and CSS to design an e-commerce frontend layout.</p>
        <p><strong>Tech:</strong> HTML, CSS</p>
      </div>

      <div className="mv3 bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
        <h3 className="f4">E-Commerce Website (Solo Project)</h3>
        <p>Personal version of the e-commerce site built alone using basic HTML and CSS.</p>
        <p><strong>Tech:</strong> HTML, CSS</p>
      </div>

      <div className="mv3 bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
        <h3 className="f4">RoboFriends App</h3>
        <p>A React project that fetches and displays robot profiles using an API.</p>
        <p><strong>Tech:</strong> React, API, CSS</p>
      </div>
    </section>
  );
};

export default Projects;