import React from 'react';
import '../styles/alphabet.css';
import Footer from './Footer';
import { SayButton } from 'react-say-fork';
import Nav from './Nav';

const Alphabets = () => {
  return (
    <div>
      {/* <Nav/> */}
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
      letter: "A. ",
      color: "red",
      text: ", A is for an apple",
      id: 1,
      fruitURL: "https://img2.cgtrader.com/items/2292214/88e56d80bb/large/red-and-green-apple-fruit-3d-model-max-obj-fbx.jpg"
    },
    {
      letter: "B. ",
      color: "yellow",
      text: ", B is for a banana",
      id: 2,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZzXYK7F3lD3badggwlGQ19NWlkD4q06B1Q&usqp=CAU"
    },
    {
      letter: "C. ",
      color: "purple",
      text: ", C is for a Cat",
      id: 3,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0368m9d6iodinCvX4m-Xa36ERR-QpYkdxAQ&usqp=CAU"
    },
    {
      letter: "D.",
      color: "red",
      text: ", D is for a Dog",
      id: 4,
      fruitURL: "https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg"
    },
    {
      letter: "E.",
      color: "red",
      text: ", E is for an Elephant",
      id: 5,
      fruitURL: "https://i.natgeofe.com/n/16fc1c64-7589-46da-8350-aa3b01da2152/3961779_2x1.jpg"
    },
    {
      letter: "F.",
      color: "red",
      text: "F is for a Fish",
      id: 6
    },
    {
      letter: "G.",
      color: "red",
      text: "G is for a Giraffe",
      id: 7
    },
    {
      letter: "H.",
      color: "red",
      text: "H is for a Horse",
      id: 8
    },
    {
      letter: "I.",
      color: "red",
      text: "I is for an Ink",
      id: 9
    },
    {
      letter: "J.",
      color: "red",
      text: "J is for a Jug",
      id: 10
    },
    {
      letter: "K.",
      color: "red",
      text: "K is for a Kitten",
      id: 11
    },
    {
      letter: "L.",
      color: "red",
      text: "Lion is for a Lion",
      id: 12
    },
    {
      letter: "M.",
      color: "red",
      text: "M is for a mango",
      id: 13
    },
    {
      letter: "N.",
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
      letter: "P.",
      color: "red",
      text: "P is for a pen",
      id: 16
    },
    {
      letter: "Q.",
      color: "red",
      text: "Q is for Queen",
      id: 17
    },
    {
      letter: "R.",
      color: "red",
      text: "R is for a Rate",
      id: 18
    },
    {
      letter: "S.",
      color: "red",
      text: "S is for a Snake",
      id: 19
    },
    {
      letter: "T.",
      color: "red",
      text: "T is for Tomato",
      id: 20
    },
    {
      letter: "U.",
      color: "red",
      text: "U is for an Umbrella",
      id: 21
    },
    {
      letter: "V.",
      color: "red",
      text: "V is for a Van",
      id: 22
    },
    {
      letter: "W.",
      color: "red",
      text: "W is for a Whale",
      id: 23
    },
    {
      letter: "X.",
      color: "red",
      text: "X is for X-mass",
      id: 24
    },
    {
      letter: "Y.",
      color: "red",
      text: "Y is for Yam",
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

  const [showAlhabet, setShowAlhabet] = React.useState(false);
  const [alphForPopup, setAlphForPopup] = React.useState({})

  const closePopup = () => {
    setAlphForPopup({})
    setShowAlhabet(false)
  }
  return (
    <div className="alphbuttons">
        {showAlhabet && <Popup letter={alphForPopup} closeHandler={closePopup} />}
      {all_letters.map(leter => {
        return (
          <div onClick={() => {
            setShowAlhabet(true)
            setAlphForPopup(leter)
          }}>
            <SayButton
            speak={`${leter.letter} ${leter.text}`}
          
              pitch={1.5}
              rate={0.6}
            >
              {leter.letter}
              
            </SayButton>
            
          </div>
        );
      })}
    </div>
  )
}


const Popup = ({letter,closeHandler}) => {
  return (
    <div className="popup">
      <h4>{letter.letter}</h4>
      <button onClick={() => { closeHandler() }}
        style={{
          fontSize: "10px",
          height: "30px",
          width: "45px",
        }}
      >Close</button>
      <h6 style={{
        fontSize: "20px",
        color: "white",
      }}>{letter.text}</h6>
      <div className='fruitURL'>
        <img src={letter.fruitURL} alt=''/>
      </div>
        
    </div>
  )
}