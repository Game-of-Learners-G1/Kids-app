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
import Readme from './Components/Readme';
import Quiz from './Components/Quiz';
import AlphaQuiz from './Quizzes/AlphaQuiz';
import ShapeQuiz from './Quizzes/ShapeQuiz';
import ColorQuiz from './Quizzes/ColorQuiz';
import DaysQuiz from './Quizzes/DaysQuiz';
import MonthsQuiz from './Quizzes/MonthsQuiz';
import AnimalQuiz from './Quizzes/AnimalQuiz';
import FruitsQuiz from './Quizzes/FruitsQuiz';
import BodyQuiz from './Quizzes/BodyQuiz';
import ArithmeticQuiz from './Quizzes/ArithmeticQuiz';
import ComputerQuiz from './Quizzes/ComputerQuiz';
import CountryQuiz from './Quizzes/CountryQuiz';

import Registration from './Registration-Logging/Registration.js'
import Login from './Registration-Logging/Login.js'
import Protected from './Registration-Logging/Protected'
import Account from './Registration-Logging/Account'

import {AuthContextProvider} from './Registration-Logging/Context/AuthContext'

function App() {
  return (
    <AuthContextProvider>
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

            {/* register and sing in */}
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />

            {/* only if a user is singed in will go to the account page/ add quiz page */}
            <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />

        </Routes>
          </div>
      </div>
    </Router>
    </AuthContextProvider>

    
  );
}

export default App;
