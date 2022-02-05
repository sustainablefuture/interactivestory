import React, { useContext, useState } from "react";
import { StoryContext } from "../Helpers/Context";
import "./styles/Quiz.css";
import { questions } from "../Data/MCQuestions";

export default function Quiz() {
  const { storyState, setStoryState } = useContext(StoryContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswerExpl, setShowAnswerExpl] = useState(false);

  const handleAnswerOptionClick = (answerOption) => {
    const { isCorrect } = answerOption;

    setSelectedAnswer(answerOption);
    setShowAnswerExpl(true);
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setShowAnswerExpl(false);
      }, 5000);
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
      <div className="left-page">
        <div className="quizcontainer">
          <h1 id="question">{questions[currentQuestion].question}</h1>
          <img
            className="quizimg"
            src={questions[currentQuestion].img}
            alt=""
          />
          <div id="answer_buttons" className="answbtn_grid">
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <>
                  <button
                    key={answerOption.id}
                    disabled={selectedAnswer}
                    className={getAnswerClass(answerOption)}
                    onClick={() => handleAnswerOptionClick(answerOption)}
                  >
                    {answerOption.answer}
                  </button>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="right-page">
        {showAnswerExpl ? <p>{questions[currentQuestion].explanation}</p> : ""}
        <div className="score-section">
          <i class="fas fa-trophy"></i>
          <h3>
            You scored {score} out of {questions.length}
          </h3>
        </div>
      </div>
    </>
  );
}

// checked, but I didn't refactor because you're still working on those I believe
