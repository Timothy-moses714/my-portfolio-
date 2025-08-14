import React from 'react';

const Contact = () => {
  return (
    <section className="pa4">
      <h2 className="f3">Contact Me</h2>
      <p>Feel free to connect with me on social media or reach out directly.</p>
      <ul className="list pl0">
        {/* Add your actual links below */}
        
      <li>
        Github { ""} <br></br>
        <a
          href="https://github.com/Timothy-moses714"
          target="_blank"
          rel="noopener noreferrer"
          className="link blue underline ">

          https://github.com/Timothy-moses714
        </a>
      </li> <br></br> <br></br>


       <li>
        Email{" "} <br></br>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="link blue underline ">

          timoajiji@gmail.com
        </a>
      </li><br></br> <br></br>

        <li>Phone: 08136965426</li>
      </ul>
    </section>
  );
};

export default Contact;