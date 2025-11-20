import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes className="home">
          <Route path="/" element={<Home />} />
          <Route path="/BeeFund"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
