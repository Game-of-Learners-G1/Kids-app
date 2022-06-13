import React from "react";
import Footer from "./Footer";
import {Link} from 'react-router-dom';

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>This is Home page</h1>
      <MidHome />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

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
      color: "dodgerblue",
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
          <Link to={object.url}>

            <Topic key={object.id} object={object} />
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
