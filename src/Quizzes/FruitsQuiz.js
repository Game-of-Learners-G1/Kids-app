import React, { useState } from 'react';
import Footer from '../Components/Footer';

const FruitsQuiz = () => {
  const questions = [
		{
      questionText: 'what is the name of this fruit',
      image: 'https://www.herbazest.com/imgs/3/f/2/9710/lemon.jpg',
			answerOptions: [
				{ answerText: 'Mango', isCorrect: false },
				{ answerText: 'Lemon', isCorrect: true },
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Banana', isCorrect: false },
			],
		},
		{
      questionText: 'Name this fruit',
      image: 'https://images.heb.com/is/image/HEBGrocery/000377497',
			answerOptions: [
				{ answerText: 'Watermelon', isCorrect: false },
				{ answerText: 'Mango', isCorrect: false },
				{ answerText: 'orange', isCorrect: false },
				{ answerText: 'Banana', isCorrect: true },
			],
		},
		{
      questionText: 'how do we call this fruit?',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt17-7k8oV7lMYzIEofWm6-8SQEngcP14QNA&usqp=CAU',
			answerOptions: [
				{ answerText: 'pawpaw', isCorrect: true },
				{ answerText: 'avocado', isCorrect: false },
				{ answerText: 'mango', isCorrect: false },
				{ answerText: 'pineapple', isCorrect: false },
			],
		},
		{
      questionText: 'This fruit is called ?',
      image: 'https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/003/978/original/270435530_a82f19bb63_z.jpg',
			answerOptions: [
				{ answerText: 'watermelon', isCorrect: false },
				{ answerText: 'Guava', isCorrect: true },
				{ answerText: 'lemon', isCorrect: false },
				{ answerText: 'mango', isCorrect: false },
			],
    },
    
    {
      questionText: 'Name the fruit below',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRiXjrGJEHnS7THBFnoXvQt20J3oUI49WXw&usqp=CAU',
			answerOptions: [
				{ answerText: 'pawpaw', isCorrect: false },
				{ answerText: 'banana', isCorrect: false },
				{ answerText: 'guava', isCorrect: false },
				{ answerText: 'apple', isCorrect: true },
			],
    },

    {
      questionText: 'This fruit is the sweetest, what is the name of the fruit ',
      image: 'https://thinkorg.ap-south-1.linodeobjects.com/uploads/products/meta/qXxX7CCRSUVZg5wLAVvSTPTOrFOoGLzvJHvwQu0V.jpeg',
			answerOptions: [
				{ answerText: 'pineapple', isCorrect: true },
				{ answerText: 'watermelon', isCorrect: false },
				{ answerText: 'orange', isCorrect: false },
				{ answerText: 'apple', isCorrect: false },
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

export default FruitsQuiz