import "./App.css";
import { useState } from "react";
import CharacterPortrait from "./Components/CharacterPortrait";
import Companion from "./Components/Companion";
import MainContent from "./Components/MainContent";
import Desk from "./Images/desk.jpg";

const deskBackgroundStyles = {
  backgroundImage: `url(${Desk})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function App() {
  const [selectedChar, setSelectedChar] = useState(null);
  const [isCompanionVisible, setIsCompanionVisible] = useState(true);
  const [storyState, setStoryState] = useState("start");

  return (
    <div style={deskBackgroundStyles} className="App">
      <div className="left-container">
        <MainContent
          storyState={storyState}
          selectChar={setSelectedChar}
          selectedChar={selectedChar}
        />
        {/* 2- Added dev buttons to change the storyState manually for development*/}
        <div className="bottom-left">
          <button className="dev-button" onClick={() => setStoryState("start")}>
            start
          </button>
          <button className="dev-button" onClick={() => setStoryState("intro")}>
            intro
          </button>
          <button
            className="dev-button"
            onClick={() => setStoryState("select")}
          >
            select
          </button>
          <button
            className="dev-button"
            onClick={() => setStoryState("chapter")}
          >
            chapter
          </button>
          <button className="dev-button" onClick={() => setStoryState("text")}>
            text
          </button>
          <button className="dev-button" onClick={() => setStoryState("quiz")}>
            quiz
          </button>
          <button
            className="dev-button"
            onClick={() => setStoryState("choices")}
          >
            betterchoices
          </button>
          <button className="dev-button" onClick={() => setStoryState("game")}>
            game
          </button>
        </div>
      </div>
      <div className="right-container">
        {/* 1 - modified <Companion /> to show it if the state is true */}
        {isCompanionVisible ? <Companion /> : <></>}
        <CharacterPortrait selectedChar={selectedChar} />
      </div>
    </div>
  );
}
export default App;

// checked
// useLocalStorage hook needed to store selectedChar, isCompanionVisible, storyState, storyProgress(tbd)
