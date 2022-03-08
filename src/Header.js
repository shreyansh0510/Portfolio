import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="navbar">
        <div className="navbarLeft">
          <a href="/">
            <div className="name">SS</div>
          </a>
        </div>
        <div className="navbarRight">
          <div className="navbarOptions">
            <a href="#about" className="about">
              about
            </a>
            <a href="#work" className="work">
              work
            </a>
            <a href="#skills" className="skills">
              skills
            </a>
            <a href="#contact" className="contacy">
              contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
