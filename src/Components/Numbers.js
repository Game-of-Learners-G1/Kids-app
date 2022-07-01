import React from 'react';
import "../styles/numbers.css"
import Footer from './Footer';


const Numbers = () => {
  const numbers = [{
    figure: 1,
    word: "one",
  },
  {
      
    figure: 2,
    word: "Two"},
    {
      figure: 3,
      word:"Three"
    },
    {
      figure: 4,
      word:"four"
    },
    {
      figure: 5,
      word:"five"
    },
    {
      figure: 6,
      word:"six"
    },
    {
      figure: 7,
      word:"seven"
    },
    {
      figure: 8,
      word:"eight"
    },
    {
      figure: 9,
      word:"nine"
    },
    {
      figure: 10,
      word:"ten"
    },
    {
      figure: 11,
      word:"eleven"
    },
    {
      figure: 12,
      word:"twelve"
    },
    {
      figure: 13,
      word:"thirteen"
    },
    {
      figure: 14,
      word:"fourteen"
    },
    {
      figure: 15,
      word:"fifteen"
    },
    {
      figure: 16,
      word:"sixteen"
    },
    {
      figure: 17,
      word:"seventeen"
    },
    {
      figure: 18,
      word:"eighteen"
    },
    {
      figure: 19,
      word:"nineteen"
    },
    {
      figure: 20,
      word:"twenty"
    },
    {
      figure: 21,
      word:"twenty one"
    },
    {
      figure: 22,
      word:"twenty two"
    },
    {
      figure: 23,
      word:"twenty three"
    },
    {
      figure: 24,
      word:"twenty four"
    },
    {
      figure: 25,
      word:"twenty"
    },
    {
      figure: 26,
      word:"twenty six"
    },
    {
      figure: 27,
      word:"twenty seven"
    },
    {
      figure: 28,
      word:"twenty eight"
    },
    {
      figure: 29,
      word:"twenty nine"
    },
    {
      figure: 30,
      word:"thirty"
    },
    {
      figure: 31,
      word:"thirty one"
    },
    {
      figure: 32,
      word:"thirty two"
    },
    {
      figure: 33,
      word:"thirty three"
    },
    {
      figure: 34,
      word:"thirty four"
    },
    {
      figure: 35,
      word:"thirty five"
    },
    {
      figure: 36,
      word:"thirty six"
    },
    {
      figure: 37,
      word:"thirty seven"
    },
    {
      figure: 38,
      word:"thirty eight"
    },
    {
      figure: 39,
      word:"thirty nine"
    },
    {
      figure: 40,
      word:"forty"
    },
  ]

  return (
    <div>
      <h1>Let's Learn Numbers'</h1>
      <div className="numbers">

      {numbers.map((number) => {
        return (
        <button style={{
          
          height: "100px",
          width: "250px",
          borderRadius: "10px",
          borderStyle: "solid",
            borderWidth: "2px",
            gap:"10px",
          // Content in center of div
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
            cursor: "pointer",
            fontSize: "25px",
          textTransform: "capitalize",
    
          }} key = {number.figure}>
            
            <h1>{number.figure}</h1>
            {number.word}
          </button>
      )
    })}
      </div>
      <Footer/>
    </div>
  )
}

export default Numbers;