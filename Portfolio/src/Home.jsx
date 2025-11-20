import React from "react";
import "./Home.css";
import image from "./assets/main_image.png";
import profileicon from "./assets/portrait.png";
import beehouse from "./assets/Bee_House.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-container">
      <div className="profile-icon">
        <img src={profileicon}></img>
      </div>
      <div className="name">
        <p>Massimo Malone</p>
      </div>
      <nav className="projects">
        <Link to="/BeeFund">
          <button className="beehouse">
            <img src={beehouse}></img>
          </button>
        </Link>
        <button className="beehouse">
          <img src={beehouse}></img>
        </button>
      </nav>
    </div>
  );
}
export default Home;
