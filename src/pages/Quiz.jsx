// Quiz.jsx
import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import '../styles/Quiz.css';

const questions = [
  {
    question: 'How does tracking habits improve motivation?',
    options: ['Helps visualize progress', 'Makes things harder', 'Adds stress', 'None of the above'],
    answer: 'Helps visualize progress',
  },
  {
    question: 'Which of the following is a benefit of tracking habits?',
    options: ['Identifies bad patterns', 'Creates confusion', 'Wastes time', 'None of the above'],
    answer: 'Identifies bad patterns',
  },
  {
    question: 'Habit tracking can improve which of these aspects of your life?',
    options: ['Physical health', 'Mental health', 'Productivity', 'All of the above'],
    answer: 'All of the above',
  },
  {
    question: 'What does consistent habit tracking help you build?',
    options: ['Accountability', 'Forgetfulness', 'Laziness', 'Excuses'],
    answer: 'Accountability',
  },
  {
    question: 'Tracking habits helps in identifying what?',
    options: ['Progress', 'Failures only', 'Only positive outcomes', 'None of the above'],
    answer: 'Progress',
  },
  {
    question: 'Why is it useful to set a goal when tracking habits?',
    options: ['Gives direction', 'Makes it boring', 'Unnecessary pressure', 'None of the above'],
    answer: 'Gives direction',
  },
  {
    question: 'Habit tracking can lead to which of these?',
    options: ['Increased discipline', 'More confusion', 'Lack of focus', 'None of the above'],
    answer: 'Increased discipline',
  },
  {
    question: 'Which of these helps in maintaining consistency?',
    options: ['Tracking progress', 'Ignoring the habit', 'Being lazy', 'None of the above'],
    answer: 'Tracking progress',
  },
  {
    question: 'How does tracking habits affect self-awareness?',
    options: ['Increases self-awareness', 'Decreases it', 'No effect', 'Confuses the mind'],
    answer: 'Increases self-awareness',
  },
  {
    question: 'What can tracking habits help you celebrate?',
    options: ['Small wins', 'Nothing', 'Failures', 'Stress'],
    answer: 'Small wins',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerOptionClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container className="quiz-container">
      <Typography variant="h4" className="quiz-heading">
        Habit Tracking Trivia Quiz
      </Typography>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-section">
          <Typography variant="h5" className="question-text">
            {questions[currentQuestion].question}
          </Typography>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="contained"
                className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
                onClick={() => handleAnswerOptionClick(option)}
              >
                {option}
              </Button>
            ))}
          </div>
          <Button
            variant="contained"
            color="primary"
            className="next-button"
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            Next
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Quiz;
