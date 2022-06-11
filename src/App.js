import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';
import './index.css';
import * as React from "react";
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
      <Nav/>
          <div className="content">
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
