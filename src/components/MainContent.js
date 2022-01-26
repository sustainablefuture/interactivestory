import React, { useState, useContext } from "react";
import Start from "./Start";
import Intro from "./Intro";
import Chapter from "./Chapter";
import { StoryContext } from "../Helpers/Context";
import Game from "./Game";
import Quiz from "./Quiz";
import Text from "./Text";

export default function MainContent() {
  const [storyState, setStoryState] = useState("start");
  return (
    <div className="main-content">
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
