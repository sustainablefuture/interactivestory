import React, { useContext, useState } from "react";
import { StoryContext } from "../Helpers/Context";
import "./styles/Quiz.css";
import { choices } from "../Data/BetterChoices";

export default function BetterChoices() {
  const { storyState, setStoryState } = useContext(StoryContext);

  const [currentChoice, setCurrentChoice] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleChoiceOptionClick = (choice) => {
    const { isCorrect } = choice;

    setSelectedAnswer(choice);
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextChoice = currentChoice + 1;
    if (nextChoice < choices.length) {
      setTimeout(() => {
        setCurrentChoice(nextChoice);
        setSelectedAnswer(null);
      }, 2000);
    } else {
      setStoryState("start");
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
      <div className="quizcontainer">
        <div className="left-container">
          <div id="questioncontainer">
            <h1 id="question">What is better to use?</h1>
            <img
              className="quizimg"
              src={choices[currentChoice].options}
              alt=""
            />
            <div id="answer_buttons" className="answbtn_grid">
              <div className="answer-section">
                {choices[currentChoice].options.map((choice) => (
                  <>
                    <img
                      key={choice.id}
                      disabled={selectedAnswer}
                      className={getAnswerClass(choice)}
                      onClick={() => handleChoiceOptionClick(choice)}
                      src={choice.options}
                      alt=""
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="right-container score-section">
          You scored {score} out of {choices.length}
        </div>
      </div>
      <div className="turtle"></div>
    </>
  );
}
