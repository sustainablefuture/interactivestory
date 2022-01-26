import "./App.css";
import React, { useState, useContext } from "react";
import Start from "./Components/Start";
import Intro from "./Components/Intro";
import Chapter from "./Components/Chapter";
import { StoryContext } from "./Helpers/Context";
import Game from "./Components/Game";
import Quiz from "./Components/Quiz";
import Text from "./Components/Text";

function App() {
  const [storyState, setStoryState] = useState("start");

  return (
    <div className="App">
      <StoryContext.Provider value={{ storyState, setStoryState }}>
        {storyState === "start" && <Start />}
        {storyState === "intro" && <Intro />}
        {storyState === "chapter" && <Chapter />}
        {storyState === "text" && <Text />}
        {storyState === "quiz" && <Quiz />}
        {storyState === "game" && <Game />}
      </StoryContext.Provider>
    </div>
  );
}

export default App;
