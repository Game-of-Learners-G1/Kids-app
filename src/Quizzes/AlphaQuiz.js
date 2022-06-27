import React, { useState } from 'react';
import Footer from '../Components/Footer';

const AlphaQuiz = () => {

  const questions = [
		{
			questionText: 'A is for ____________',
			answerOptions: [
				{ answerText: 'Cow', isCorrect: false },
				{ answerText: 'Goat', isCorrect: false },
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Banana', isCorrect: false },
			],
		},
		{
			questionText: 'Fill in the blank space, _GG',
			answerOptions: [
				{ answerText: 'E', isCorrect: true },
				{ answerText: 'L', isCorrect: false },
				{ answerText: 'U', isCorrect: false },
				{ answerText: 'A', isCorrect: false },
			],
        },
		{
			questionText: 'Z is for _____________',
			answerOptions: [
				{ answerText: 'X-mass', isCorrect: false },
				{ answerText: 'Zebra', isCorrect: true },
				{ answerText: 'Van', isCorrect: false },
				{ answerText: 'Lemon', isCorrect: false },
			],
		},
		{
			questionText: 'X is for _____________',
			answerOptions: [
				{ answerText: 'X-mass', isCorrect: true },
				{ answerText: 'Zebra', isCorrect: false },
				{ answerText: 'Yam', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			questionText: 'Fill in the blank space, AP_LE',
			answerOptions: [
				{ answerText: 'A', isCorrect: false },
				{ answerText: 'Z', isCorrect: false },
				{ answerText: 'P', isCorrect: true },
				{ answerText: 'B', isCorrect: false },
			],
        },
		{
			questionText: 'Y is for _____________',
			answerOptions: [
				{ answerText: 'X-mass', isCorrect: false },
				{ answerText: 'Zebra', isCorrect: false },
				{ answerText: 'Yam', isCorrect: true },
				{ answerText: 'Orange', isCorrect: false },
			],
		},
		{
			questionText: 'M is for ______________',
			answerOptions: [
				{ answerText: 'Monkey', isCorrect: true },
				{ answerText: 'Pencil', isCorrect: false },
				{ answerText: 'Dog', isCorrect: false },
				{ answerText: 'Rabit', isCorrect: false },
			],
		},
		{
			questionText: 'L is for ____________',
			answerOptions: [
				{ answerText: 'Cat', isCorrect: false },
				{ answerText: 'Donkey', isCorrect: false },
				{ answerText: 'Pig', isCorrect: false },
				{ answerText: 'Lion', isCorrect: true },
			],
    },
    
    {
			questionText: 'K is for ____________',
			answerOptions: [
				{ answerText: 'Kitten', isCorrect: true },
				{ answerText: 'Snake', isCorrect: false },
				{ answerText: 'Pig', isCorrect: false },
				{ answerText: 'Lion', isCorrect: false },
			],
    },

    {
			questionText: 'E is for ____________',
			answerOptions: [
				{ answerText: 'Cat', isCorrect: false },
				{ answerText: 'Donkey', isCorrect: false },
				{ answerText: 'Elephant', isCorrect: true },
				{ answerText: 'Lion', isCorrect: false },
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
        
        <div className='score-section'  style={{
          marginTop: "100px",
          marginBottom: "200px",
          fontSize: "30px",
        }}>
          <h1  style={{
            marginBottom:"30px",
          }}>Congratulations !</h1>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'  style={{
                    margin: "30px",
                    fontSize:"30px",
                    
                  }}>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
              <div
                style={{
                  fontSize:"30px",
                  
                }}
                className='question-text'>{questions[currentQuestion].questionText}</div>
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

export default AlphaQuiz;