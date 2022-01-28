import "./Companion.css";
import { useState, useEffect } from "react";

export default function Companion() {
  const [isVisible, setIsVisible] = useState(true);
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isVisible);
  }, [isVisible]);

  function onClick() {
    setIsBubbleVisible(true);
  }

  return (
    <div className="companion-frame">
      {isBubbleVisible ? (
        <div className="popup">
          <div className="box bubble">I'm the bubble text</div>
          <div className="turtle" onClick={onClick}></div>
        </div>
      ) : (
        <div className="turtle" onClick={onClick}></div>
      )}
    </div>
  );
}
