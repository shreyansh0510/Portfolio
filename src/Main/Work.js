import React from "react";
import "./Work.css";

function Work() {
  return (
    <div className="workClass" id="work">
      <div className="workTitle">Work</div>
      <div className="workContent">
        <div className="projectImage">
          <img src="./images/foodkart.png" alt="" />
        </div>
        <div className="projectDescription">
          <div className="projectName">
            <i className="bi bi-folder2"></i>
            <span>Food Ordering App</span>
          </div>
          <div className="projectLevel">Level: Advanced</div>
          <div className="projectDetails">
            A web app which allows users to order food from restaurants based on
            various cuisines, location, cost. Powered by user login feature and
            payment gateway method.
          </div>
          <div className="techStack">
            <span>React</span>
            <span>Javascript</span>
            <span>Covid API</span>
            {/* <span>VS Code</span> */}
            <span>Mateial-UI</span>
          </div>
          <div className="githubLink">
            <a
              href="https://github.com/shreyansh0510/Foodkart"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
              Click here to view
            </a>
          </div>
        </div>
      </div>

      <div className="workContent">
        <div className="projectImage">
          <img src="./images/covidtracker.png" alt="Covid19-Tracker" />
        </div>
        <div className="projectDescription">
          <div className="projectName">
            <i className="bi bi-folder2"></i>
            <span>Covid-19 Tracker App</span>
          </div>
          <div className="projectLevel">Level: Intermediate</div>
          <div className="projectDetails">
            A portal to display countries Covid cases, death and recovered
            stats. Utilized Javascript library Chart.JS for data visualization
            and information.
          </div>
          <div className="techStack">
            <span>React</span>
            <span>Chart.JS</span>
            <span>Covid API</span>
            <span>VS Code</span>
          </div>
          <div className="githubLink">
            <a
              href="https://github.com/shreyansh0510/Worldwide-Covid19-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
              Click here to view
            </a>
          </div>
        </div>
      </div>

      {/* <div className="workContent">
        <div className="projectImage">
          <img src="./images/todo.png" alt="TodoList" />
        </div>
        <div className="projectDescription">
          <div className="projectName">
            <i className="bi bi-folder2"></i>
            <span>Todo List App</span>
          </div>
          <div className="projectLevel">Level: Beginner</div>
          <div className="projectDetails">
            A web app which allows users to order food from restaurants based on
            various cuisines, location, cost. Powered by user login feature and
            payment gateway method.
          </div>
          <div className="techStack">
            <span>Javascript</span>
            <span>Firebase</span>
          </div>
          <div className="githubLink">
            <i className="bi bi-github"></i>
            Click here to view
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Work;
