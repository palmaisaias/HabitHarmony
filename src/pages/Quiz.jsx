import React, { useState, useEffect } from "react";
import "../styles/Quiz.css";

const Quiz = () => {
  const [questions] = useState([
    {
      questionText:
        "How does tracking your habits help improve personal growth?",
      options: [
        "It allows you to see patterns and make adjustments",
        "It helps you achieve goals instantly",
        "It eliminates the need for planning",
        "It reduces accountability",
      ],
      answer: "It allows you to see patterns and make adjustments",
    },
    {
      questionText: "What is one of the main benefits of habit tracking?",
      options: [
        "You feel more productive and motivated",
        "You can ignore small achievements",
        "You avoid setting new goals",
        "You increase your stress levels",
      ],
      answer: "You feel more productive and motivated",
    },
    {
      questionText: "How can tracking your habits impact your health?",
      options: [
        "It encourages consistent healthy routines",
        "It promotes procrastination",
        "It reduces sleep quality",
        "It discourages exercise",
      ],
      answer: "It encourages consistent healthy routines",
    },
    {
      questionText:
        "Why is it useful to keep a habit tracker for long-term goals?",
      options: [
        "It breaks down big goals into achievable steps",
        "It makes goals more difficult to achieve",
        "It only focuses on short-term rewards",
        "It removes the need for goal-setting",
      ],
      answer: "It breaks down big goals into achievable steps",
    },
    {
      questionText: "What effect does habit tracking have on self-discipline?",
      options: [
        "It strengthens self-discipline by creating accountability",
        "It reduces motivation over time",
        "It creates more distractions",
        "It only affects physical health",
      ],
      answer: "It strengthens self-discipline by creating accountability",
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(10); // Timer for each question

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleNextQuestion(); // Automatically move to the next question when time runs out
    }
  }, [timeRemaining]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeRemaining(10); // Reset timer for the next question
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowScore(false);
    setTimeRemaining(10);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-heading">Quiz App</h1>

      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button className="restart-button" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / questions.length) * 100
                }%`,
              }}
            ></div>
          </div>

          <div className="timer">Time Remaining: {timeRemaining}s</div>

          <div className="question-section">
            <h2 className="question-text">
              {questions[currentQuestionIndex].questionText}
            </h2>
            <div className="options-container">
              {questions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option}
                  className={`option-button ${
                    selectedOption === option ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button
            className="next-button"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
