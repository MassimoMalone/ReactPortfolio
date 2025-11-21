import React from "react";
import "./Home.css";
import image from "./assets/main_image.png";
import profileicon from "./assets/portrait.png";
import beehouse from "./assets/Bee_House.png";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Projects from "./Projects";

function Home() {
  return (
    <div className="main-container-home">
      <div className="profile-icon">
        <img src={profileicon}></img>
      </div>
      <div className="name">
        <p>Massimo Malone</p>
      </div>
      <div>
        <button className="gpa">GPA: 3.52</button>
      </div>
      <div className="socials">
        
      </div>
      <nav className="projects">
        {Projects.map((p, index) => (
          <NavLink to={p.path} key={index}>
            <button className="icons">
              <img src={p.icon} />
            </button>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
export default Home;
