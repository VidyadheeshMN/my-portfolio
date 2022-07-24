import React, { useEffect } from "react";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import NavBar from "./Components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Projects from "./Components/Projects";

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='col'>
          <div className='row mt-5'></div>
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
