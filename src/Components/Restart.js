import React from "react";
import confetti from "../Images/confetti.png";
import happykids from "../Images/happykids.png";

export default function Restart({
  setCurrentPage,
  setSelectedChar,
  setIsCompanionVisible,
}) {
  const onRestart = () => {
    setCurrentPage(0);
    setSelectedChar(null);
    setIsCompanionVisible(false);
  };

  return (
    <>
      <div className="left-page">
        <img className="imgconfetti" src={confetti} alt="" />
        <h1>Congratulations!</h1>
        <h2>You finished the adventure!</h2>
      </div>
      <div className="right-page">
        <div className="restart">
          <h2 className="restart-right">
            Don't hesitate to try it again.
            <br />
            <br />
            All you have to do is turn the page!
          </h2>
          <img src={happykids} alt="" />
        </div>
        <button className="progress-button" onClick={onRestart}>
          Restart the adventure
        </button>
      </div>
    </>
  );
}
