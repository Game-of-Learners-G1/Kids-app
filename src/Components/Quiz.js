import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';

const Quiz = () => {
  return (
      <div>
          <h1>Click on what you like to do</h1>
          <MidHome />
          <Footer/>
    </div>
  )
}

export default Quiz;



const MidHome = () => {
    const buttonsArray = [
      {
        name: "Alphabets",
        color: "green",
        id: 1,
        url:"/alphaquiz"
      },
      {
        name: "Shapes",
        color: "yellow",
        id: 2,
        url:"/shapequiz"
      },
      {
        name: "Colors",
        color: "purple",
        id: 3,
          url:"/colorquiz"
      },
      {
      name: "Days of the week",
      color: "white",
        id: 10,
      url: "/daysquiz"
  },
      {
        name: "Months",
        color: "blue",
        id: 4,
        url:"/monthsquiz"
      },
      {
        name: "Animals",
        color: "red",
        id: 5,
        url:"/animalsquiz"
      },
      {
        name: "Fruits",
        color: "orange",
        id: 6,
        url:"/fruitsquiz"
      },
      {
        name: "Parts of the body",
        color: "brown",
        id: 7,
        url:"/bodysquiz"
      },
      {
        name: "Arithmetic",
        color: "pink",
        id: 8,
        url:"/arithmeticquiz"
      },
      {
        name: "Parts of a Computer",
        color: "dodgerblue",
        id: 9,
        url:"/computerquiz"
      },
      {
        //not important here
        name: "Let computer read",
        color: "blue",
        id: 11,
        url:"/read"
      },
      {
      //not important here
        name: "Countries and their cities",
        color: "dodgerblue",
        id: 12,
        url:"/countryquiz"
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