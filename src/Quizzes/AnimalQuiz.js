import React, { useState } from 'react';
import Footer from '../Components/Footer';

const AnimalQuiz = () => {
  const questions = [
		{
      questionText: 'What is the name of this animal',
      image: 'https://img.freepik.com/free-vector/cow-realistic-illustration_98292-1419.jpg?t=st=1656322553~exp=1656323153~hmac=cc0a574bab226fda40f1b344f7e3556eabdd086aa4667b757250c582f25931c3&w=740',
			answerOptions: [
				{ answerText: 'Cow', isCorrect: true },
				{ answerText: 'Goat', isCorrect: false },
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Banana', isCorrect: false },
			],
		},
		{
      questionText: 'What is the name of the following animal ?',
      image: 'https://image.shutterstock.com/image-photo/lion-8-years-panthera-leo-600w-21701116.jpg',
			answerOptions: [
				{ answerText: 'Donkey', isCorrect: false },
				{ answerText: 'Zebra', isCorrect: false },
				{ answerText: 'Lion', isCorrect: true },
				{ answerText: 'Lizard', isCorrect: false },
			],
		},
		{
      questionText: 'Name the animal seen the picture below',
      image: 'https://img.freepik.com/free-vector/cartoon-funny-hippo-isolated-white-background_29190-4164.jpg?w=996',
			answerOptions: [
				{ answerText: 'Hippopotamus', isCorrect: true },
				{ answerText: 'Pig', isCorrect: false },
				{ answerText: 'Dog', isCorrect: false },
				{ answerText: 'Crocodile', isCorrect: false },
			],
		},
		{
      questionText: 'How do you call the following animal ?',
      image: 'https://media.istockphoto.com/photos/the-australian-water-dragon-on-white-background-picture-id576740846?k=20&m=576740846&s=612x612&w=0&h=-PlOmgr1gPWoglANvl_OVJ2daLiK3e1x6br-5YY1Sl0=',
			answerOptions: [
				{ answerText: 'Cat', isCorrect: false },
				{ answerText: 'Lizard', isCorrect: true },
				{ answerText: 'Pig', isCorrect: false },
				{ answerText: 'Chameleon', isCorrect: false },
			],
    },
	{
    questionText: 'Name the animal below',
      image: 'https://media.istockphoto.com/photos/front-view-of-british-shorthair-cat-7-months-old-sitting-picture-id104355461?k=20&m=104355461&s=612x612&w=0&h=9KPbuZ6tTUxqi-_WZT8zrjNrf1W8XBuXIw8ZIM_YQuI=',
			answerOptions: [
				{ answerText: 'Tiger', isCorrect: false },
				{ answerText: 'Leopard', isCorrect: false },
				{ answerText: 'Dog', isCorrect: false },
				{ answerText: 'Cat', isCorrect: true },
			],
    },
    {
		questionText: 'Name the animal below',
		  image: 'https://media.istockphoto.com/photos/australian-shepherd-sitting-against-white-background-picture-id1154953522?k=20&m=1154953522&s=612x612&w=0&h=YLYsSZkUCWvHZcZtVkSBbC8x3blUHwNVFEwtIpUEejM=',
				answerOptions: [
					{ answerText: 'Lion', isCorrect: false },
					{ answerText: 'Wolf', isCorrect: false },
					{ answerText: 'Dog', isCorrect: true },
					{ answerText: 'Cat', isCorrect: false },
				],
		},
    {
      questionText: 'Name the animal below',
      image: 'https://media.istockphoto.com/photos/somali-giraffe-picture-id156539063?k=20&m=156539063&s=612x612&w=0&h=UEbhH1JkDJRb1bX3WIpQ4zw2NkxN__9n3pSTC1k6sgw=',
			answerOptions: [
				{ answerText: 'Zebra', isCorrect: false },
				{ answerText: 'Leopard', isCorrect: false },
				{ answerText: 'Elephant', isCorrect: false },
				{ answerText: 'Giraffe', isCorrect: true },
			],
    },
    {
		questionText: 'Name the animal below',
		image: 'https://media.istockphoto.com/photos/zebra-isolated-on-white-background-picture-id501250398?k=20&m=501250398&s=612x612&w=0&h=-s0z9EsjTvszPt6NpDWqbulngza10JTkLaZweNeFZuo=',
			  answerOptions: [
				  { answerText: 'Zebra', isCorrect: true },
				  { answerText: 'Gazell', isCorrect: false },
				  { answerText: 'Donkey', isCorrect: false },
				  { answerText: 'Giraffe', isCorrect: false },
			  ],
	  },	

	  {
		questionText: 'Name the animal below',
		image: 'https://cdn.pixabay.com/photo/2020/10/28/17/03/fish-5694025__340.png',
			  answerOptions: [
				  { answerText: 'Snake', isCorrect: false },
				  { answerText: 'Lizard', isCorrect: false },
				  { answerText: 'Fish', isCorrect: true },
				  { answerText: 'Crocodile', isCorrect: false },
			  ],
	  },	

    {
      questionText: 'Name the bird below ',
      image: 'https://media.istockphoto.com/photos/white-pigeon-picture-id171347056?k=20&m=171347056&s=612x612&w=0&h=Jx2e3-wZKvEpd6o77O5d5r1niewuLkCmGq3zHvdNv0E=',
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