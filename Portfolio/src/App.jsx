import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import Projects from "./Projects";

function App() {
  return (
    <BrowserRouter basename="/ReactPortfolio/">
      <div className="home">
        <Routes>
          <Route path="/" element={<Home />} />
          {Projects.map((p, index) => (
            <Route
              path={p.path}
              key={index}
              element={
                <ProjectPage
                  title={p.title}
                  image={p.image}
                  icon={p.icon}
                  description={p.description}
                />
              }
            />
          ))}
          ;
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
