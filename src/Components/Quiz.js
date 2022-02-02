import React, { useContext, useState } from "react";
import { StoryContext } from "../Helpers/Context";
import "./Quiz.css";
import { questions } from "../Data/MCQuestions";

export default function Quiz() {
  const { storyState, setStoryState } = useContext(StoryContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (answerOption) => {
    const { isCorrect } = answerOption;

    setSelectedAnswer(answerOption);
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
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
        <div id="questioncontainer">
          <div id="question">{questions[currentQuestion].question}</div>
          <div id="answer_buttons" className="answbtn_grid">
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  disabled={selectedAnswer}
                  className={getAnswerClass(answerOption)}
                  onClick={() => handleAnswerOptionClick(answerOption)}
                >
                  {answerOption.answer}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      </div>
      <div className="turtle"></div>
    </>
  );
}
