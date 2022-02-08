import { useState } from "react";
import "./styles/Quiz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

export default function Quiz({ currentPage, setCurrentPage, quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswerExpl, setShowAnswerExpl] = useState(false);
  const questions = quiz.content;

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
        <div className="score-section">
          <FontAwesomeIcon icon={faTrophy} size="lg" flip="horizontal" />
          <h3>
            You scored {score} out of {questions.length}
          </h3>
        </div>
        {showAnswerExpl ? <p>{questions[currentQuestion].explanation}</p> : ""}
      </div>
      <button
        className="progress-button"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        next page
      </button>
    </>
  );
}

// checked, but I didn't refactor because you're still working on those I believe
