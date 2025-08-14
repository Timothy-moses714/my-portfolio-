import React from "react";

const Footer = () => {
    return(
      <footer>
        <p className=" gray">
        &copy;{new Date().getFullYear()}rightReversed <br></br>
        <a href='emailto:timoajiji@gmail.com'>timoajiji@gmail.com</a>
        </p>
      </footer>
    )
};
export default Footer;