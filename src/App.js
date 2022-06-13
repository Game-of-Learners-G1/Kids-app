import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';
import './index.css';
import * as React from "react";
import Nav from './Components/Nav';
import Alphabets from './Components/Alphabets';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shapes from './Components/Shapes';
import Colors from './Components/Colors';
import Days from './Components/Days';
import Months from './Components/Months';
import Animals from './Components/Animals';
import Fruits from './Components/Fruits';
import Body from './Components/Body';
import Arithmetic from './Components/Arithmetic';
import Computer from './Components/Computer';
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
            <Route path="/alphabets" element={<Alphabets />} />
            <Route path="/shapes" element={<Shapes />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/days" element={<Days />} />
            <Route path="/months" element={<Months />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/body" element={<Body />} />
            <Route path="/arithmetic" element={<Arithmetic />} />
            <Route path="/computer" element={<Computer />} />

        </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
