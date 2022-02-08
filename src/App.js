import "./App.css";
import { useState } from "react";
import CharacterPortrait from "./Components/CharacterPortrait";
import Companion from "./Components/Companion";
import MainContent from "./Components/MainContent";
import Desk from "./Images/desk.jpg";
import { story } from "./Data/Story";
import desknew from "./Images/desknew.png";
import Start from "./Components/Start";
import useLocalStorage from "./hooks/useLocalStorage";

const deskBackgroundStyles = {
  backgroundImage: `url(${desknew})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "bottom",
};

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [selectedChar, setSelectedChar] = useLocalStorage("selectedChar", null);
  const [isCompanionVisible, setIsCompanionVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const storyState = story[currentPage].type;

  return (
    <>
      {isStarted ? (
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
      ) : (
        <Start
          setIsStarted={setIsStarted}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}
export default App;

// checked
// useLocalStorage hook needed to store selectedChar, isCompanionVisible, storyState, storyProgress(tbd)
