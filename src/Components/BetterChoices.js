import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function BetterChoices({
  choices,
  currentPage,
  setCurrentPage,
}) {
  const [currentChoice, setCurrentChoice] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswerExpl, setShowAnswerExpl] = useState(false);

  const handleChoiceOptionClick = (options) => {
    const { isCorrect } = options;

    setSelectedAnswer(options);
    setShowAnswerExpl(true);
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextChoice = currentChoice + 1;
    if (nextChoice < choices.length) {
      setTimeout(() => {
        setCurrentChoice(nextChoice);
        setSelectedAnswer(null);
        setShowAnswerExpl(false);
      }, 2000);
    }
  };

  const getAnswerClass = (answer) => {
    const baseClass = "answbtn";

    if (selectedAnswer) {
      if (answer.isCorrect) {
        return `${baseClass} correct`;
      }

      if (
        selectedAnswer.answer === answer.answer &&
        !selectedAnswer.isCorrect
      ) {
        return `${baseClass} wrong`;
      }
    }

    return baseClass;
  };

  return (
    <>
      <div className="left-page">
        <h1 id="question">What is better to use?</h1>
        <div className="choice-section">
          {choices[currentChoice].options.map((option) => (
            <img
              key={option.id}
              width="200px"
              height="150px"
              disabled={selectedAnswer}
              className={getAnswerClass(option)}
              onClick={() => handleChoiceOptionClick(option)}
              src={option.answer}
              alt={option.answer}
            />
          ))}
        </div>
      </div>
      <div className="right-page">
        <div className="score-section">
          <FontAwesomeIcon icon={faTrophy} size="lg" flip="horizontal" />
          <h3>
            You scored {score} out of {choices.length}
          </h3>
        </div>
        {showAnswerExpl ? (
          <>
            <p>{choices[currentChoice].explanation}</p>
            <img src={choices[currentChoice].img} alt="" />
          </>
        ) : (
          <></>
        )}
      </div>
      <button
        className="progress-button"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next Page
      </button>
    </>
  );
}
