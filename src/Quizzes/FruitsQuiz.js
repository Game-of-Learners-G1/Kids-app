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
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Banana', isCorrect: true },
			],
		},
		{
			questionText: 'This is an ',
			image: 'https://media.istockphoto.com/photos/avocados-isolated-on-white-picture-id94929126?k=20&m=94929126&s=612x612&w=0&h=OOKnuKrGI3BA5kK2VikVjBPqdVgtH4xxhHprxxMzh8A=',
				  answerOptions: [
					  { answerText: 'Pawpaw', isCorrect: false },
					  { answerText: 'Avocado', isCorrect: true },
					  { answerText: 'Orange', isCorrect: false },
					  { answerText: 'Mango', isCorrect: false },
				  ],
			  },
		{
      questionText: 'how do we call this fruit?',
      image: 'https://media.istockphoto.com/photos/half-papaya-showing-orange-flesh-and-dark-seeds-green-skin-picture-id146786826?k=20&m=146786826&s=612x612&w=0&h=CSfLYHSLVca0tCthQII1XETJgUz3HyAJ16nzl9rTe6c=',
			answerOptions: [
				{ answerText: 'Pawpaw', isCorrect: true },
				{ answerText: 'Avocado', isCorrect: false },
				{ answerText: 'Mango', isCorrect: false },
				{ answerText: 'Pineapple', isCorrect: false },
			],
		},
		{
      questionText: 'This fruit is called ?',
      image: 'https://media.istockphoto.com/photos/isolated-pink-guava-fruits-picture-id1221000031?k=20&m=1221000031&s=612x612&w=0&h=uKMZjrV_5M8jQqYXNClNPxrxdfRe9KoI82QQ-TPkh5Q=',
			answerOptions: [
				{ answerText: 'Watermelon', isCorrect: false },
				{ answerText: 'Guava', isCorrect: true },
				{ answerText: 'Lemon', isCorrect: false },
				{ answerText: 'Mango', isCorrect: false },
			],
    },
	{
		questionText: 'Name the fruit below ',
		image: 'https://media.istockphoto.com/photos/watermelon-picture-id157636928?k=20&m=157636928&s=612x612&w=0&h=4nDJO2G0CkYFM0-LPo_-Keb__X6VRqTxcRxp5NkkFcg=',
			  answerOptions: [
				  { answerText: 'Watermelon', isCorrect: true },
				  { answerText: 'Guava', isCorrect: false },
				  { answerText: 'Pawpaw', isCorrect: false },
				  { answerText: 'Mango', isCorrect: false },
			  ],
	  },
	  {
		questionText: 'What is the name of the fruit below?',
		image: 'https://media.istockphoto.com/photos/fresh-slices-of-mango-on-a-bed-of-leaves-picture-id168278888?k=20&m=168278888&s=612x612&w=0&h=qFnu2UgMZKfrkCkZfGKbEhCJ2ViokXmel7WSZi_ZbPM=',
			  answerOptions: [
				  { answerText: 'Watermelon', isCorrect: false },
				  { answerText: 'Guava', isCorrect: false },
				  { answerText: 'Pawpaw', isCorrect: false },
				  { answerText: 'Mango', isCorrect: true },
			  ],
	  },
    
    {
      questionText: 'Name the fruit below',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRiXjrGJEHnS7THBFnoXvQt20J3oUI49WXw&usqp=CAU',
			answerOptions: [
				{ answerText: 'Pawpaw', isCorrect: false },
				{ answerText: 'Banana', isCorrect: false },
				{ answerText: 'Guava', isCorrect: false },
				{ answerText: 'Apple', isCorrect: true },
			],
    },
	{
	questionText: 'This is an ?',
      image: 'https://media.istockphoto.com/photos/tangerine-duo-with-leafs-picture-id182463420?k=20&m=182463420&s=612x612&w=0&h=9oJOMbn4Kki8rAKX9goJ-hUuk3U93ahR3mwSUozaCLA=',
			answerOptions: [
				{ answerText: 'Strawberry', isCorrect: false },
				{ answerText: 'Orange', isCorrect: true },
				{ answerText: 'Lemon', isCorrect: false },
				{ answerText: 'Mango', isCorrect: false },
			],
    },

    {
      questionText: 'This fruit is the sweetest, what is the name of the fruit ',
      image: 'https://thinkorg.ap-south-1.linodeobjects.com/uploads/products/meta/qXxX7CCRSUVZg5wLAVvSTPTOrFOoGLzvJHvwQu0V.jpeg',
			answerOptions: [
				{ answerText: 'Pineapple', isCorrect: true },
				{ answerText: 'Watermelon', isCorrect: false },
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Apple', isCorrect: false },
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