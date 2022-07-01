import React, { useState } from 'react';
import Footer from '../Components/Footer';

const CountryQuiz = () => {
  const questions = [
		{
			questionText: 'What is the capital city of kenya?',
			answerOptions: [
				{ answerText: 'Nairobi', isCorrect: true },
				{ answerText: 'Kampala', isCorrect: false },
				{ answerText: 'Khartoum', isCorrect: false },
				{ answerText: 'Dodoma', isCorrect: false },
			],
		},
		{
			questionText: 'The capital city of Somalia is called_____',
			answerOptions: [
				{ answerText: 'Juba', isCorrect: false },
				{ answerText: 'Mogadishu', isCorrect: true },
				{ answerText: 'Adis Ababa', isCorrect: false },
				// { answerText: '', isCorrect: false },
			],
		},
		{
			questionText: 'Which city has the same name has its country?',
			answerOptions: [
				{ answerText: 'Eritrea', isCorrect: true },
				{ answerText: 'Cairo', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			
			],
		},
		{
			questionText: 'Name the country with city known as Juba',
			answerOptions: [
				{ answerText: 'Uganda', isCorrect: false },
				{ answerText: 'Sudan', isCorrect: false },
				{ answerText: 'South Sudan', isCorrect: true },
				{ answerText: 'Ethiopia', isCorrect: false },
			],
    },
    
    {
			questionText: 'In which country is Kakuma located',
			answerOptions: [
				{ answerText: 'Uganda', isCorrect: false },
				{ answerText: 'Sudan', isCorrect: false },
				{ answerText: 'Kenya', isCorrect: true },
				
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

export default CountryQuiz
