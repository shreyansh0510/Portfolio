import React from "react";
import "./About.css";

function About() {
  return (
    <div className="aboutClass" id="about">
      <div className="aboutImage ">
        {/* C:\Users\shrey\Projects\React2021\projectElon\portfolio\src\images\biopic.jpeg */}
        <img src="/images/biopic.jpg" alt="profilepicture" />
      </div>
      <div className="aboutDescription">
        <div className="aboutme">About Me</div>
        <div className="text">
          Hello! My name is Shreyansh and I enjoy creating things that live on
          the internet. My interest in web development started back in 2019 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
          Fast-forward to today, and I’ve had the privilege of working at a
          start-up. My main focus these days is building accessible, inclusive
          products and digital experiences for end-user
        </div>
        {/* <div className="resumediv">
          <a href="/pdf/shreyanshsingh.pdf" target="_blank">
            <span className="resumespan">
              Resume
              <i className="bi bi-file-earmark-pdf"></i>
            </span>
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default About;
