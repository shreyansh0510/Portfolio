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
          <i class="bi bi-list"></i>
        </button>
        <div className="navbarRight" id="nav-ul">
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
