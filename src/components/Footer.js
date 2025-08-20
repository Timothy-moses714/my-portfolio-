import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <p>&copy; {new Date().getFullYear()} Moses Timothy. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/Timothy-moses714" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:timoajiji@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
