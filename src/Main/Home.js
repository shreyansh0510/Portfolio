import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="profile">
      {/* <div className="profilePic"></div> */}
      <div className="bio">
        <div className="radium">Hello world, my name is</div>
        <br />
        <div className="shreyanshsingh">Shreyansh Singh.</div>
        <br />
        <div className="slogan">
          <h6>&#60;I build & design things for the web /&#62;</h6>
        </div>
        <br />
        <div className="intro">
          I’m a software engineer specializing in building and designing
          <br /> exceptional digital experiences. Currently, I’m focused on
          <br /> building accessible, human-centered products
        </div>
      </div>
    </div>
  );
}

export default Home;
