import React from "react";

export default function CompanionActivation({ setIsCompanionVisible }) {
  return (
    <div className="companion-activation">
      <h1>What a chance!</h1>
      <h2>Bastian will join you for the rest of your adventures.</h2>
      <h2>Click the button to have him jump out of the book.</h2>
      <div className="companion-wrap">
        <div
          onClick={() => setIsCompanionVisible(true)}
          className="companion-wrap"
        >
          <button className="companion-button">Let me join you!</button>
        </div>
      </div>
    </div>
  );
}
