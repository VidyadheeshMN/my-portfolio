import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import Resume from "./Components/Resume/Resume";
import NavBar from "./Components/Navbar";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='col'>
          <div className='row mt-4'></div>
          <div className='row mt-3'></div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
