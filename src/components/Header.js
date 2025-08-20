import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-title">
        <h1>Moses Timothy</h1>
        <p>Frontend Developer | Crafting web experiences</p>
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
