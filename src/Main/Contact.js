import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactClass" id="contact">
      <div className="contactTitle">Contact</div>
      <div className="contactlinks">
        <div className="icons">
          <i className="bi bi-linkedin"></i>
          <a
            href="https://www.linkedin.com/in/shreyansh-singh-54b53a143/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="icons">
          <i className="bi bi-envelope-fill"></i>
          <a
            href="mailto: shreyanshsingh0510@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Gmail
          </a>
        </div>
        <div className="icons">
          <i className="bi bi-github"></i>
          <a
            href="https://github.com/shreyansh0510"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div className="icons">
          <i className="bi bi-twitter"></i>
          <a
            href="https://twitter.com/shreyansh5ingh"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
