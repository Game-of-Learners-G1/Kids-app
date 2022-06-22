import React, { useState } from 'react';
import Footer from '../Components/Footer';

const AnimalQuiz = () => {
  const questions = [
		{
      questionText: 'What is the name of this animal',
      image: 'https://a-z-animals.com/media/2021/12/Best-farm-animals-cow.jpg',
			answerOptions: [
				{ answerText: 'Cow', isCorrect: true },
				{ answerText: 'Goat', isCorrect: false },
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Banana', isCorrect: false },
			],
		},
		{
      questionText: 'What is the name of the following animal ?',
      image: 'https://www.krugerpark.co.za/images/black-maned-lion-shem-compion-786x500.jpg',
			answerOptions: [
				{ answerText: 'Donkey', isCorrect: false },
				{ answerText: 'Zebra', isCorrect: false },
				{ answerText: 'Lion', isCorrect: true },
				{ answerText: 'Lizard', isCorrect: false },
			],
		},
		{
      questionText: 'Name the animal seen the picture below',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOt83pD8XgO6MO6En0FQfY5uAS_B-KMQJizQ&usqp=CAU',
			answerOptions: [
				{ answerText: 'Hippopotamus', isCorrect: true },
				{ answerText: 'Pig', isCorrect: false },
				{ answerText: 'Dog', isCorrect: false },
				{ answerText: 'Crocodile', isCorrect: false },
			],
		},
		{
      questionText: 'How do you call the following animal ?',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfWUzyNSp9DEBzF443Wzmy_-WGzbWzwpH4A&usqp=CAU',
			answerOptions: [
				{ answerText: 'Cat', isCorrect: false },
				{ answerText: 'Lizard', isCorrect: true },
				{ answerText: 'Pig', isCorrect: false },
				{ answerText: 'Chameleon', isCorrect: false },
			],
    },
    
    {
      questionText: 'Name the animal below',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LBOAqJBIE1mB6IX7cGkwZaH7H-ksUa5hIg&usqp=CAU',
			answerOptions: [
				{ answerText: 'Zebra', isCorrect: false },
				{ answerText: 'Leopard', isCorrect: false },
				{ answerText: 'Elephant', isCorrect: false },
				{ answerText: 'Giraffe', isCorrect: true },
			],
    },

    {
      questionText: 'Name the bird below ',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Laughing_dove_%28Spilopelia_senegalensis_cambayensis%29.jpg',
			answerOptions: [
				{ answerText: 'Duck', isCorrect: false },
				{ answerText: 'Pigeon', isCorrect: false },
				{ answerText: 'Dove', isCorrect: true },
				{ answerText: 'Chicken', isCorrect: false },
			],
		},
    
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
      {showScore ? (
        
        <div className='score-section'
          style={{
            marginTop: "100px",
            marginBottom: "200px",
            fontSize: "30px",
          }}
        >
          <h1 style={{
            marginBottom:"30px",
          }}>Congratulations !</h1>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'   style={{
                    margin: "30px",
                    fontSize:"30px",
                    
                  }}>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
              <div
                style={{
                  margin: "30px",
                  fontSize:"30px",
                  
                }}
                className='question-text'>{questions[currentQuestion].questionText}</div>
              <img src = {questions[currentQuestion].image} style={{
          height: "200px",
          width: "200px",
        }} alt ="" />
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                style={{
                  cursor: "pointer",
                  height: "60px",
                  width: "170px",
                  marginBottom: "160px",
                  marginTop: "50px",
                  marginLeft: "10px",
                  fontSize: "25px",
                }}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
      )}
    <Footer/>
		</div>
	);
}

export default AnimalQuiz