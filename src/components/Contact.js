import React, { useRef } from 'react';
import useScrollFade from './useScrollFade';

const Contact = () => {
  const contactRef = useRef(null);
  useScrollFade(contactRef);

  return (
    <section id="contact" className="contact-section animate-on-scroll" ref={contactRef}>
      <h2>Contact Me</h2>
      <p>Feel free to connect with me or reach out directly.</p>
      <ul>
        <li>
          Github: <br />
          <a href="https://github.com/Timothy-moses714" target="_blank" rel="noopener noreferrer">
            https://github.com/Timothy-moses714
          </a>
        </li>
        <li>
          Email: <br />
          <a href="mailto:timoajiji@gmail.com">timoajiji@gmail.com</a>
        </li>
        <li>Phone: 08136965426</li>
      </ul>
    </section>
  );
};

export default Contact;
