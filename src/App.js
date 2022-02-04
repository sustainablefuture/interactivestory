import "./App.css";
import { useState } from "react";
import CharacterPortrait from "./Components/CharacterPortrait";
import Companion from "./Components/Companion";
import MainContent from "./Components/MainContent";
import Desk from "./images/desk.jpg";
import { story } from "./Data/Story";

const deskBackgroundStyles = {
  backgroundImage: `url(${Desk})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function App() {
  const [selectedChar, setSelectedChar] = useState(null);
  const [isCompanionVisible, setIsCompanionVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const storyState = story[currentPage].type;

  return (
    <div style={deskBackgroundStyles} className="App">
      <div className="left-container">
        <MainContent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          storyState={storyState}
          selectChar={setSelectedChar}
          selectedChar={selectedChar}
          story={story}
        />
        <div className="bottom-left"></div>
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
