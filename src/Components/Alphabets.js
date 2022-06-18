import React from 'react';
import '../styles/alphabet.css';
import Footer from './Footer';
import { SayButton } from 'react-say-fork';

const Alphabets = () => {
  return (
    <div>
      <h1>Let's Learn Alphabets</h1>
      <AlphLetters />
      <Footer/>
    </div>
  )
}

export default Alphabets


const AlphLetters = () => {
  const all_letters = [
    {
      letter: "A ",
      color: "red",
      text: ",  A, is, for, an, apple",
      id: 1
    },
    {
      letter: "B ",
      color: "yellow",
      text: ",  B, is, for, a, banana",
      id: 2
    },
    {
      letter: "C ",
      color: "purple",
      text: ", C, is, for, a, Cat",
      id: 3
    },
    {
      letter: "D ",
      color: "red",
      text: ", D, is, for, a, Dog",
      id: 4
    },
    {
      letter: "E ",
      color: "red",
      text: ", E, is, for, an, Elephant",
      id: 5
    },
    {
      letter: "F ",
      color: "red",
      text: ", F, is, for, a, Fish",
      id: 6
    },
    {
      letter: "G ",
      color: "red",
      text: ", G, is, for, a Giraffe",
      id: 7
    },
    {
      letter: "H ",
      color: "red",
      text: ", , H, is, for, a, Horse",
      id: 8
    },
    {
      letter: "I ",
      color: "red",
      text: ", H, is, for, an, Ink",
      id: 9
    },
    {
      letter: "J ",
      color: "red",
      text: ", J, is, for, a, Jug",
      id: 10
    },
    {
      letter: "K ",
      color: "red",
      text: ", K, is, for, a, Kitten",
      id: 11
    },
    {
      letter: "L ",
      color: "red",
      text: ", Lion, is, for, a, Lion",
      id: 12
    },
    {
      letter: "M ",
      color: "red",
      text: ", M, is, for, a mango",
      id: 13
    },
    {
      letter: "N",
      color: "red",
      text: ", N, is, for, a, Nest",
      id: 14
    },
    {
      letter: "O",
      color: "red",
      text: ", O, is, for, an, Onion",
      id: 15
    },
    {
      letter: "P",
      color: "red",
      text: ", P, is, for, a, pen",
      id: 16
    },
    {
      letter: "Q",
      color: "red",
      text: ", Q, is, for, Queen",
      id: 17
    },
    {
      letter: "R",
      color: "red",
      text: ", R, is, for, a, Rate",
      id: 18
    },
    {
      letter: "S",
      color: "red",
      text: ", S, is, for, a, Snake",
      id: 19
    },
    {
      letter: "T",
      color: "red",
      text: ", T, is, for, Tomato",
      id: 20
    },
    {
      letter: "U",
      color: "red",
      text: ", U, is, for, an, Umbrella",
      id: 21
    },
    {
      letter: "V",
      color: "red",
      text: ", V, is, for, a, Van",
      id: 22
    },
    {
      letter: "W",
      color: "red",
      text: ", W, is, for, a, Whale",
      id: 23
    },
    {
      letter: "X",
      color: "red",
      text: ", X, is, for X-mass",
      id: 24
    },
    {
      letter: "Y",
      color: "red",
      text: ", Y, is, for, Yam",
      id: 25
    },
    {
      letter: "Z ",
      color: "red",
      text: ", Z, is, for, a Zebra",
      id: 26
    },
    {
      letter: "Quiz",
      color: "red",
      id: 27
    },
  ];

  return (
    <div className="alphbuttons">
      
      {all_letters.map(leter => {
        return (
          <>
            <SayButton
            speak={`${leter.letter} ${leter.text}`}
              
              pitch={1.5}
              rate={0.8}
            >
              {leter.letter}
              
            </SayButton>
            
          </>
        );
      })}
    </div>
  )
}
