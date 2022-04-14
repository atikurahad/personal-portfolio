import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Notfound from "./components/Notfound/Notfound";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound></Notfound>} />
      </Routes>
    </div>
  );
}

export default App;
