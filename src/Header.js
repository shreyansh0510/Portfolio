import React from "react";
import "./Header.css";

function Header() {
  // const hamburger = document.getElementById("hamburger");
  // const navUL = document.getElementById("nav-ul");

  // hamburger.addEventListener("click", () => {
  //   navUL.classList.toggle("show");
  // });

  const handleClick = () => {
    document.getElementById("nav-ul").classList.toggle("show");
  };

  return (
    <>
      <div className="navbar">
        <div className="navbarLeft">
          <a href="/">
            <div className="name">SS</div>
          </a>
        </div>
        <button className="hamburger" id="hamburger" onClick={handleClick}>
          <i className="bi bi-list"></i>
        </button>
        <div className="navbarRight" id="nav-ul">
          <div className="navbarOptions">
            <a href="#about" className="about">
              ABOUT
            </a>
            <a href="#work" className="work">
              WORK
            </a>
            <a href="#skills" className="skills">
              SKILLS
            </a>
            <a href="#contact" className="contact">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
