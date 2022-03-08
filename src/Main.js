import React from "react";
import "./Main.css";
import Home from "./Main/Home";
import About from "./Main/About";
import Work from "./Main/Work";
import Skills from "./Main/Skills";
import Contact from "./Main/Contact";

function Main() {
  return (
    <div className="main">
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default Main;
