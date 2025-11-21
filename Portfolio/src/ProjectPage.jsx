import React from "react";
import "./ProjectPage.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import X from "./assets/X.png";
import frame from "./assets/VideoFrame.png";
import beefund from "./assets/BeeFundPicture.png";
import honey from "./assets/Honey.png";

function ProjectPage({ title, image, icon, description }) {
  return (
    <div className="main-container">
      <Link to="/">
        <button className="x-button" title={title}>
          <img src={X} className="x-picture"></img>
        </button>
      </Link>
      <h1 className="title">
        {title}
        <img src={icon} className="icon" />
      </h1>

      <p className="description">{description}</p>
      <div className="pictures">
        <img src={image} className="project-image" />
        <img src={frame} className="image-frame" />
      </div>
    </div>
  );
}
export default ProjectPage;