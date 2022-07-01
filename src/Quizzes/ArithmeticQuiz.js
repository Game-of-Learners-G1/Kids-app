import React, { useState } from 'react';
import Footer from '../Components/Footer';

const ArithmeticQuiz = () => {
  const questions = [
		{
			questionText: 'Write two in figures',
			answerOptions: [
				{ answerText: 22, isCorrect: false },
				{ answerText: 2, isCorrect: true },
				{ answerText: 4, isCorrect: false },
				{ answerText: 5, isCorrect: false },
			],
		},
		{
			questionText: 'what is 37 in words',
			answerOptions: [
				{ answerText: 'Thirty seven', isCorrect: false },
				{ answerText: 'Thirty eight', isCorrect: true },
				{ answerText: 'Thirty five', isCorrect: false },
				{ answerText: 'Thirty nine', isCorrect: false },
			],
		},
		{
			questionText: 'find the next number. 1, 2, 3, ___',
			answerOptions: [
				{ answerText: 5, isCorrect: false },
				{ answerText: 3, isCorrect: false },
        { answerText: 4, isCorrect: true },
        {answerText: 6, isCorrect: false }
			
			],
		},
		{
			questionText: 'complete the plank space. 11, 22, 33, ____ ',
			answerOptions: [
				{ answerText: '55', isCorrect: false },
				{ answerText: '66', isCorrect: false },
				{ answerText: '44', isCorrect: true },
				{ answerText: '77', isCorrect: false },
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

export default ArithmeticQuiz