import React, { useContext, useState } from "react";
import { StoryContext } from "../Helpers/Context";
// import "./styles/Quiz.css";
import { choices } from "../Data/BetterChoices.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function BetterChoices() {
  const { storyState, setStoryState } = useContext(StoryContext);

  const [currentChoice, setCurrentChoice] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswerExpl, setShowAnswerExpl] = useState(false);

  const handleChoiceOptionClick = (options) => {
    console.log("options", options);
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
    } else {
      setStoryState("game");
    }
  };

  const getAnswerClass = (answer) => {
    console.log("answer", answer);
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
        {showAnswerExpl ? (
          <>
            <p>{choices[currentChoice].explanation}</p>
            <img src={choices[currentChoice].img} alt="" />
          </>
        ) : (
          <></>
        )}
        <div className="score-section">
          <FontAwesomeIcon icon={faTrophy} size="lg" flip="horizontal" />
          <h3>
            You scored {score} out of {choices.length}
          </h3>
        </div>
      </div>
    </>
  );
}
