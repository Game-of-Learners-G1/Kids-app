import React, { useState } from 'react';
import Footer from '../Components/Footer';

const ShapeQuiz = () => {

	const questions = [
		{
			id: 1,
    questionText: '1. What is the name of the following shape',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTfYvHPtt5M_jCqxyaeeEDuaN2HugMbZUc3darEHc5LdI_S5tCAc6v0VAJ5ufzkADlRjc&usqp=CAU',
			answerOptions: [
				{ answerText: 'Square', isCorrect: false },
				{ answerText: 'Sphere', isCorrect: true },
				{ answerText: 'circle', isCorrect: false },
				{ answerText: 'Triangle', isCorrect: false },
			],
		},
		{
			id:2,
    questionText: '2. Name this shape?',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Red_circle.svg/2048px-Red_circle.svg.png',
			answerOptions: [
				{ answerText: 'Circle', isCorrect: true },
				{ answerText: 'oval', isCorrect: false },
        { answerText: 'Sphere', isCorrect: false },
				{ answerText: 'Rectangle', isCorrect: false },
			],
		},
		{
			id:3,
    questionText: '3. What is this shape',
    image: 'https://st.depositphotos.com/1795881/1619/i/600/depositphotos_16199827-stock-photo-3d-symbol.jpg',
			answerOptions: [
				{ answerText: 'Arrow', isCorrect: false },
				{ answerText: 'Star', isCorrect: true },
				{ answerText: 'Semi-circle', isCorrect: false },
				{ answerText: 'Octagon', isCorrect: false },
			],
		},
		{
			id:4,
    questionText: '4. Name this figure',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-aa49c9e1d225f3b7cfa9bbd84fb5f5c0',
			answerOptions: [
				{ answerText: 'Square', isCorrect: false },
				{ answerText: 'Rectangle', isCorrect: false },
				{ answerText: 'Triangle', isCorrect: false },
				{ answerText: 'Rhombus', isCorrect: true },
			],
    },
    
		{
		id:5,
    questionText: '5. How do you call the following figure',
    image: 'https://clipart.world/wp-content/uploads/2020/10/Crescent-Moon-clipart-transparent.png',
			answerOptions: [
				{ answerText: 'Oval', isCorrect: false },
				{ answerText: 'Circle', isCorrect: false },
				{ answerText: 'Crescent', isCorrect: true },
				{ answerText: 'Semi-circle', isCorrect: false },
			],
    },

		{
		id:6,
    questionText: 'Name the shape ',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20210204192812/c.JPG',
			answerOptions: [
				{ answerText: 'Polygon', isCorrect: true },
				{ answerText: 'Pyramid', isCorrect: false },
				{ answerText: 'Prism', isCorrect: false },
				{ answerText: 'Cone', isCorrect: false },
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
			

		):(

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
			onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}
							
							</button>
						))}
					</div>
				</>
    )}
    <Footer/>
		</div>
	);
}

export default ShapeQuiz