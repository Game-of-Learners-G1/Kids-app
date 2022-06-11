import React from "react";
import Footer from "./Footer";

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
    },
    {
      name: "Shapes",
      color: "yellow",
      id: 2,
    },
    {
      name: "Colors",
      color: "purple",
      id: 3,
    },
    {
      name: "Days",
      color: "white",
      id: 10,
    },
    {
      name: "Months",
      color: "blue",
      id: 4,
    },
    {
      name: "Animals",
      color: "red",
      id: 5,
    },
    {
      name: "Fruits",
      color: "orange",
      id: 6,
    },
    {
      name: "Parts of the body",
      color: "brown",
      id: 7,
    },
    {
      name: "Arithmetic",
      color: "pink",
      id: 8,
    },
    {
      name: "Parts of a Computer",
      color: "dodgerblue",
      id: 9,
    },
    {
      name: "",
      color: "dodgerblue",
      id: 11,
    },
    {
      name: "",
      color: "dodgerblue",
      id: 12,
    },
  ];
  return (
    <div className="mid-home">
      <div className="buttons-container">
        {buttonsArray.map((object) => (
          <Topic key={object.id} object={object} />
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
