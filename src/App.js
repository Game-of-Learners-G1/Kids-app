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
            <Route path="/read" element={<Readme />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/alphaquiz" element={<AlphaQuiz />} />
            <Route path="/shapequiz" element={<ShapeQuiz />} />
            <Route path="/colorquiz" element={<ColorQuiz />} />
            <Route path="/daysquiz" element={<DaysQuiz />} />
            <Route path="/monthsquiz" element={<MonthsQuiz />} />
            <Route path="/animalsquiz" element={<AnimalQuiz />} />
            <Route path="/fruitsquiz" element={<FruitsQuiz />} />
            <Route path="/bodysquiz" element={<BodyQuiz />} />
            <Route path="/arithmeticquiz" element={<ArithmeticQuiz />} />
            <Route path="/computerquiz" element={<ComputerQuiz />} />
            <Route path="/countryquiz" element ={<CountryQuiz />} />

        </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
