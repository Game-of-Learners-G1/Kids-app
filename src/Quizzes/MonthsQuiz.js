import React, { useState } from 'react';
import Footer from '../Components/Footer';

const MonthsQuiz = () => {
  const questions = [
		{
			questionText: '________ is the second month of the year',
			answerOptions: [
				{ answerText: 'March', isCorrect: false },
				{ answerText: 'February', isCorrect: true },
				{ answerText: 'July', isCorrect: false },
				{ answerText: 'May', isCorrect: false },
			],
		},
		{
			questionText: 'When do christians celebrate christmas?',
			answerOptions: [
				{ answerText: 'January', isCorrect: false },
				{ answerText: 'September', isCorrect: false },
				{ answerText: 'December', isCorrect: true },
				{ answerText: 'June', isCorrect: false },
			],
		},
		{
			questionText: 'November is the ------ month of the year?',
			answerOptions: [
				{ answerText: 'Eleventh', isCorrect: true },
				{ answerText: 'Fifth', isCorrect: false },
				{ answerText: 'Second', isCorrect: false },
				{ answerText: 'Sixth', isCorrect: false },
			],
		},
		{
			questionText: '------ is the fifth month of the year?',
			answerOptions: [
				{ answerText: 'January', isCorrect: false },
				{ answerText: 'May', isCorrect: true },
				{ answerText: 'October', isCorrect: false },
				{ answerText: 'April', isCorrect: false },
			],
    },
    
    {
			questionText: 'January is the ------ month of the year?',
			answerOptions: [
				{ answerText: 'Tenth', isCorrect: false },
				{ answerText: 'seventh', isCorrect: false },
				{ answerText: 'Last', isCorrect: false },
				{ answerText: 'First', isCorrect: true },
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
          <p>
            <button>Try again</button>
          </p>
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

export default MonthsQuiz