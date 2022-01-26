import "./App.css";
import CharacterPortrait from "./components/CharacterPortrait";
import Companion from "./components/Companion";
import MainContent from "./components/MainContent";
import useToggle from "./hooks/useToggle";

function App() {
  const [menu, toggleMenu] = useToggle(false);

  return (
    <div className="App">
      <div className="left-container">
        <MainContent />
        <div className="bottom-left">
          <button onClick={toggleMenu} className="dev-utilities">
            Dev
          </button>
          {menu ? <div>I'm developer tools</div> : <></>}
        </div>
      </div>
      <div className="right-container">
        <Companion />
        <CharacterPortrait />
      </div>
    </div>
  );
}

export default App;
