import React from 'react';
import { SayButton } from 'react-say-fork';


const Arithmetic = () => {
  const numbers = [{
    figure: 1,
    word: "one",
    // 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27
  }]

  return (
    <div>
      <h1>Arithmetic</h1>
      {numbers.map((number) => {
        return (
        <button style={{
          
          height: "100px",
          width: "150px",
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
    
          }}>
            <SayButton speak = {number.word}/>
              
            
            {number.figure}
          </button>
      )
    })}
    </div>
  )
}

export default Arithmetic;