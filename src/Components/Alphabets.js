import React from 'react';
import '../styles/alphabet.css';
import Footer from './Footer';
import { SayButton } from 'react-say-fork';


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
      id: 6,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlg7nQqmntaFwtTsrf7CYYhKBAmFrVptpaQ&usqp=CAU"
    },
    {
      letter: "G.",
      color: "red",
      text: ", G is for a Giraffe",
      id: 7,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWObQCvUm4XUvbZtbJsllVBLlDMlgnocXrA&usqp=CAU"
    },
    {
      letter: "H. ",
      color: "red",
      text: ", H is for a Horse",
      id: 8,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQKXhp-TM0Nn5oW8MW25NzaoXdq-yqXb7_8Q&usqp=CAU"
    },
    {
      letter: "I. ",
      color: "red",
      text: ", I is for an Ink",
      id: 9,
      fruitURL: "https://www.kokuyocamlin.com/uploads/product_img/104_Fountain%20Pen%20Ink.jpg"
    },
    {
      letter: "J. ",
      color: "red",
      text: "J is for a Jug",
      id: 10,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9HbZx2FxKfUfTVT3N76374gy9CarPquRzCw&usqp=CAU"
    },
    {
      letter: "K. ",
      color: "red",
      text: ", K is for a Kitten",
      id: 11,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3d7rIsFwDl6WhRWLib6hdX8gXgGDZuu1yj2Cu5Er1qiEv1WlpIww_hIamVXUDqXbJwLA&usqp=CAU"
    },
    {
      letter: "L. ",
      color: "red",
      text: ", L is for a Lion",
      id: 12,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQavChZxUod9yRPQaAU4y56UPrZa_3YdonPsQ&usqp=CAU"
    },
    {
      letter: "M. ",
      color: "red",
      text: ", M is for a mango",
      id: 13,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhDe9NRpR78nqTuL8FPj4MnnCZc9kpwHngQ&usqp=CAU"
    },
    {
      letter: "N. ",
      color: "red",
      text: ", N is for a Nest",
      id: 14,
      fruitURL: "https://m.media-amazon.com/images/I/81nR0tBfd+L._SL1500_.jpg"
    },
    {
      letter: "O. ",
      color: "red",
      text: ", O is for an Onion",
      id: 15,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBG9pf29RfV4oLgaCf7iXl3r_fcJTxUniJvg&usqp=CAU"
    },
    {
      letter: "P. ",
      color: "red",
      text: ", P is for a pen",
      id: 16,
      fruitURL: "https://media.istockphoto.com/photos/red-and-blue-ballpoint-pens-on-white-background-picture-id1040237248?s=170667a"
    },
    {
      letter: "Q. ",
      color: "red",
      text: ", Q is for Queen",
      id: 17,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyRHNlS-j18k9nQhMz2-F6vGUSEJ3zh9PkA&usqp=CAU"
    },
    {
      letter: "R. ",
      color: "red",
      text: ", R is for a Rat",
      id: 18,
      fruitURL: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1440,f_auto/50491001_kupidw.png"
    },
    {
      letter: "S.",
      color: "red",
      text: ",S is for a Snake",
      id: 19,
      fruitURL: "https://ichef.bbci.co.uk/news/976/cpsprodpb/138D3/production/_122938008_gettyimages-574901555.jpg"
    },
    {
      letter: "T. ",
      color: "red",
      text: ", T is for Tomato",
      id: 20,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1K2aj_djyBIHNX7HCnJYoXhugOYqqHsnjQ&usqp=CAU"
    },
    {
      letter: "U. ",
      color: "red",
      text: ", U is for an Umbrella",
      id: 21,
      fruitURL: "https://5.imimg.com/data5/CS/LQ/MY-40335887/baby-printed-umbrella-250x250.jpg"
    },
    {
      letter: "V. ",
      color: "red",
      text: ", V is for a Van",
      id: 22,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRiZXdm3FPRZEdCd168bj8fu-dWd0fw03Sg&usqp=CAU"
    },
    {
      letter: "W. ",
      color: "red",
      text: ", W is for a Whale",
      id: 23,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm3FjlWSCviW_66u6uvyQpGyVGRzH1vBbstQ&usqp=CAU"
    },
    {
      letter: "X. ",
      color: "red",
      text: ", X is for X-mass",
      id: 24,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwY4q4bAPLG_6vbK2EeQTGKFOcSqYGpqcTJIjhb4WO2vy5iuL0jTmoLJtlunH_kBX4KvY&usqp=CAU"
    },
    {
      letter: "Y. ",
      color: "red",
      text: ", Y is for Yam",
      id: 25,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqcQbPm-ah0PiD5n6qDXqezpqe79-lhVWPQ&usqp=CAU"
    },
    {
      letter: "Z. ",
      color: "red",
      text: ", Z is for a Zebra",
      id: 26,
      fruitURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0kzdf4Cqmtbe6zUIo2dmCJXE6uEqI2-6EkDw8ZfdWVdXvtQ40w58B6hIUsa5ZS6_NksE&usqp=CAU"
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