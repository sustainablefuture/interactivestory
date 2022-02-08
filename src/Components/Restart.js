import React from "react";

export default function Restart({
  setCurrentPage,
  setSelectedChar,
  setIsCompanionVisible,
  setIsStarted,
}) {
  const onRestart = () => {
    setCurrentPage(0);
    setSelectedChar(null);
    setIsCompanionVisible(false);
    setIsStarted(false);
  };

  return (
    <div className="restart">
      <h1>Congratulations!</h1>
      <h2>You finished the adventure!</h2>
      <h2 className="restart-right">
        Don't hesitate to try it again.
        <br />
        <br />
        All you have to do is turn the page!
      </h2>
      <button className="progress-button" onClick={onRestart}>
        Restart the adventure
      </button>
    </div>
  );
}
