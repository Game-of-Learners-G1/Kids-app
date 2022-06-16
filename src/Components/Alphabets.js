import React from 'react';
import '../styles/alphabet.css';
import Footer from './Footer';

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
      letter: "A",
      color: "red",
      id: 1
    },
    {
      letter: "B",
      color: "yellow",
      id: 2
    },
    {
      letter: "C",
      color: "purple",
      id: 3
    },
    {
      letter: "D",
      color: "red",
      id: 4
    },
    {
      letter: "E",
      color: "red",
      id: 5
    },
    {
      letter: "F",
      color: "red",
      id: 6
    },
    {
      letter: "G",
      color: "red",
      id: 7
    },
    {
      letter: "H",
      color: "red",
      id: 8
    },
    {
      letter: "I",
      color: "red",
      id: 9
    },
    {
      letter: "J",
      color: "red",
      id: 10
    },
    {
      letter: "K",
      color: "red",
      id: 11
    },
    {
      letter: "L",
      color: "red",
      id: 12
    },
    {
      letter: "M",
      color: "red",
      id: 13
    },
    {
      letter: "N",
      color: "red",
      id: 14
    },
    {
      letter: "O",
      color: "red",
      id: 15
    },
    {
      letter: "P",
      color: "red",
      id: 16
    },
    {
      letter: "Q",
      color: "red",
      id: 17
    },
    {
      letter: "R",
      color: "red",
      id: 18
    },
    {
      letter: "S",
      color: "red",
      id: 19
    },
    {
      letter: "T",
      color: "red",
      id: 20
    },
    {
      letter: "U",
      color: "red",
      id: 21
    },
    {
      letter: "V",
      color: "red",
      id: 22
    },
    {
      letter: "W",
      color: "red",
      id: 23
    },
    {
      letter: "X",
      color: "red",
      id: 24
    },
    {
      letter: "Y",
      color: "red",
      id: 25
    },
    {
      letter: "Z",
      color: "red",
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
        return <button key = {leter.id}>{leter.letter}</button>
      })}
    </div>
  )
}
