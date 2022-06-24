import React, { useState } from 'react';
import Footer from '../Components/Footer';

const DaysQuiz = () => {
  const questions = [
		{
			questionText: '________ is the first day of the week',
			answerOptions: [
				{ answerText: 'Saturday', isCorrect: false },
				{ answerText: 'Sunday', isCorrect: true },
				{ answerText: 'Monday', isCorrect: false },
				{ answerText: 'Tuesday', isCorrect: false },
			],
		},
		{
			questionText: 'Name the forth day of the work',
			answerOptions: [
				{ answerText: 'Tuesday', isCorrect: false },
				{ answerText: 'Monday', isCorrect: false },
				{ answerText: 'Wednesday', isCorrect: true },
				{ answerText: 'Thursday', isCorrect: false },
			],
		},
		{
			questionText: 'When do Christians go to church',
			answerOptions: [
				{ answerText: 'Sunday', isCorrect: true },
				{ answerText: 'Saturday', isCorrect: false },
				{ answerText: 'Monday', isCorrect: false },
				{ answerText: 'Friday', isCorrect: false },
			],
		},
		{
			questionText: 'Name the last day of the week',
			answerOptions: [
				{ answerText: 'Friday', isCorrect: false },
				{ answerText: 'Saturday', isCorrect: true },
				{ answerText: 'Monday', isCorrect: false },
				{ answerText: 'Tuesday', isCorrect: false },
			],
    },
    
    {
			questionText: 'When do muslims worship',
			answerOptions: [
				{ answerText: 'Sunday', isCorrect: false },
				{ answerText: 'Thursday', isCorrect: false },
				{ answerText: 'Saturday', isCorrect: false },
				{ answerText: 'Friday', isCorrect: true },
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

export default DaysQuiz;