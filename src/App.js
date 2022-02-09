import "./App.css";
import { useState } from "react";
import CharacterPortrait from "./Components/CharacterPortrait";
import Companion from "./Components/Companion";
import MainContent from "./Components/MainContent";
import { story } from "./Data/Story";
import desknew from "./Images/desknew.png";
import apple from "./Images/top_apple.png";
import pencil from "./Images/pencil.png";
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
  const [isCompanionVisible, setIsCompanionVisible] = useLocalStorage(
    "companion",
    false
  );
  const [currentPage, setCurrentPage] = useState(0);
  const storyState = story[currentPage].type;
  // scoreState to add

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
              setSelectedChar={setSelectedChar}
              story={story}
              setIsCompanionVisible={setIsCompanionVisible}
              setIsStarted={setIsStarted}
            />
            <div className="bottom-left"></div>
          </div>
          <div className="right-container">
            {isCompanionVisible ? <Companion /> : <></>}
            {selectedChar && <CharacterPortrait selectedChar={selectedChar} />}
          </div>
          <img className="pencil" src={pencil} alt="pencil"></img>
          <img className="apple" src={apple} alt="apple"></img>
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
