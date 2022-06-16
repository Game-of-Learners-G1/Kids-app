import React from "react";
import Footer from "./Footer";
import {Link} from 'react-router-dom';

import "../styles/Home.css";

import computer from "../Images/computer.png"

const Home = () => {
  return (
    <div className="home">

      {/* code from chuol */}

      <div className="container">
        <div className="contentComputer">

        <div className="computer">
        <img src={computer} alt=""/>
          </div>
          
    <div id="content">
        <h1>Learn with <br></br>Course Correct</h1>
        <p>The best learning tool for your kids, let your kids learn, play and glow!</p>
    </div>
    
          </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270"><path fill="gray" fill-opacity="1" d="M0,160L80,186.7C160,213,320,267,480,256C640,245,800,171,960,144C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
</div>

      {/* end of code from chuol */}

      {/* <h1>This is Home page</h1> */}
      <MidHome />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

const TopHome = () => { 
  return(
    <div className="top-home">
      </div>
  )
 }

const MidHome = () => {
  const buttonsArray = [
    {
      name: "Alphabets",
      color: "green",
      id: 1,
      url:"/alphabets"
    },
    {
      name: "Shapes",
      color: "yellow",
      id: 2,
      url:"/shapes"
    },
    {
      name: "Colors",
      color: "purple",
      id: 3,
        url:"/colors"
    },
    {
    name: "Days of the week",
    color: "white",
      id: 10,
    url: "/days"
},
    {
      name: "Months",
      color: "blue",
      id: 4,
      url:"/months"
    },
    {
      name: "Animals",
      color: "red",
      id: 5,
      url:"/animals"
    },
    {
      name: "Fruits",
      color: "orange",
      id: 6,
      url:"/fruits"
    },
    {
      name: "Parts of the body",
      color: "brown",
      id: 7,
      url:"/body"
    },
    {
      name: "Arithmetic",
      color: "pink",
      id: 8,
      url:"/arithmetic"
    },
    {
      name: "Parts of a Computer",
      color: "dodgerblue",
      id: 9,
      url:"/computer"
    },
    {
      //not important here
      name: "Trees",
      color: "blue",
      id: 11,
      url:"/trees"
    },
    {
    //not important here
      name: "Chairs",
      color: "dodgerblue",
      id: 12,
      url:"/chairs"
    },
  ];
  return (
    <div className="mid-home">
      <div className="buttons-container">
        {buttonsArray.map((object) => (
          <Link key={object.id} to={object.url}>

            <Topic  object={object} />
          </Link>
        ))}
      </div>
      
    </div>
  );
};

const Topic = ({ object }) => {
  return (
    <div
      style={{
        backgroundColor: object.color,
      }}
      className="topic"
    >
      <h1>{object.name}</h1>
    </div>
  );
};
