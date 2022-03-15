import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contactClass" id="contact">
      <div className="contactTitle">Contact</div>
      <div className="contactlinks">
        <div className="icons">
          <a
            href="https://github.com/shreyansh0510"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
            Github
          </a>
        </div>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/shreyansh-singh-54b53a143/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
            LinkedIn
          </a>
        </div>
        <div className="icons">
          <a
            href="mailto: shreyanshsingh0510@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-envelope-fill"></i>
            Gmail
          </a>
        </div>

        <div className="icons">
          <a
            href="https://twitter.com/shreyansh5ingh"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-twitter"></i>
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
