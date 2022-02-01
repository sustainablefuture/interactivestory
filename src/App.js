import "./App.css";
import { useState } from "react";
import CharacterPortrait from "./Components/CharacterPortrait";
import Companion from "./Components/Companion";
import MainContent from "./Components/MainContent";
import useToggle from "./hooks/useToggle";

function App() {
  const [menu, toggleMenu] = useToggle(false);
  const [selectedChar, setSelectedChar] = useState(null);
  const [isCompanionvisible, setIsCompanionvisible] = useState(false);

  return (
    <div className="App">
      <div className="left-container">
        <MainContent selectChar={setSelectedChar} selectedChar={selectedChar} />
        <div className="bottom-left">
          <button onClick={toggleMenu} className="dev-utilities">
            Dev
          </button>
          {menu ? <div>I'm developer tools</div> : <></>}
        </div>
      </div>
      <div className="right-container">
        <Companion
          showCompanion={(isCompanionvisible, setIsCompanionvisible)}
        />
        <CharacterPortrait selectedChar={selectedChar} />
      </div>
    </div>
  );
}
export default App;
