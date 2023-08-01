import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import About from "./About";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const tleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d1829";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} tleMode={tleMode} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<About />} />
            <Route
              path="/about"
              element={
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
