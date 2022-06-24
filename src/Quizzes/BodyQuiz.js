import React, { useState } from 'react';
import Footer from '../Components/Footer';


const BodyQuiz = () => {
  const questions = [
		{
      questionText: ' this is my?',
      image: 'https://d1pra95f92lrn3.cloudfront.net/media/thumb/8542_fit512.jpg',
			answerOptions: [
				{ answerText: 'Nose', isCorrect: false },
				{ answerText: 'Leg', isCorrect: true },
				{ answerText: 'Ear', isCorrect: false },
				{ answerText: 'Mouth', isCorrect: false },
			],
		},
		{
      questionText: ' I eat with my?',
      image: 'https://cdn0.iconfinder.com/data/icons/body-parts-cartoon-style/512/al362_16-512.png',
			answerOptions: [
				{ answerText: 'Knee', isCorrect: false },
				{ answerText: 'Arm', isCorrect: false },
				{ answerText: 'Teeth', isCorrect: false },
				{ answerText: 'Hand', isCorrect: true },
			],
		},
		{
      questionText: 'We see with our?',
      image: 'https://th.bing.com/th/id/R.91e939f3fa7e166ad06bf2412b74ab79?rik=2NwU5P%2fxKOV31g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-EISeqH6y3YM%2fUk2bMPb_NuI%2fAAAAAAAAHn4%2f0UKSZF5QtWw%2fs1600%2fhow-to-photograph-human-eye.jpg&ehk=s0lYkiHBuA5tMzpFq4VXmAyqd4JPjJOk9IJ7kVA3VTM%3d&risl=&pid=ImgRaw&r=0',
			answerOptions: [
				{ answerText: 'Eye', isCorrect: true },
				{ answerText: 'Stomach', isCorrect: false },
				{ answerText: 'Finger', isCorrect: false },
				{ answerText: 'Foot', isCorrect: false },
			],
		},
		{
      questionText: 'We smell with our? ?',
      image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/321810_2200-800x1200.jpg',
			answerOptions: [
				{ answerText: 'Chest', isCorrect: false },
				{ answerText: 'Elbow', isCorrect: false },
				{ answerText: 'Nose', isCorrect: true },
				{ answerText: 'Tongue', isCorrect: false },
			],
    },
    
    {
      questionText: 'Name the part of the body below?',
      image: 'https://images.medicinenet.com/images/article/main_image/elbow-pain-1.jpg',
			answerOptions: [
				{ answerText: 'Neck', isCorrect: false },
				{ answerText: 'Toes', isCorrect: false },
				{ answerText: 'Teeth', isCorrect: false },
				{ answerText: 'Elbow', isCorrect: true },
			],
    },

    {
      questionText: 'People write with their?',
      image: 'https://th.bing.com/th/id/R.d8b13ada4550544ca6b4b93e014a3f19?rik=6AVoHqrf3yT8wQ&pid=ImgRaw&r=0',
			answerOptions: [
				{ answerText: 'Fingers', isCorrect: true },
				{ answerText: 'Nose', isCorrect: false },
				{ answerText: 'Elbow', isCorrect: false },
				{ answerText: 'Mouth', isCorrect: false },
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

export default BodyQuiz