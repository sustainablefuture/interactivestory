import React, { useState, useContext } from "react";

import Book from "../images/book.png";

import Start from "./Start";
import Intro from "./Intro";
import Chapter from "./Chapter";
import { StoryContext } from "../Helpers/Context";
import Game from "./Game";
import Quiz from "./Quiz";
import Text from "./Text";
import CharacterSelection from "./CharacterSelection.js";

export default function MainContent({ selectChar, selectedChar }) {
  const [storyState, setStoryState] = useState("select");
  const [score, setScore] = useState(0);

  return (
    <div
      style={{
        backgroundImage: `url(${Book})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className="main-content"
    >
      {/* <div className="left-page"></div>
      <div className="right-page"></div> */}
      <StoryContext.Provider
        value={{ storyState, setStoryState, score, setScore }}
      >
        {storyState === "start" && <Start />}
        {storyState === "intro" && <Intro />}
        {storyState === "select" && (
          <CharacterSelection
            selectedChar={selectedChar}
            selectChar={selectChar}
          />
        )}
        {storyState === "chapter" && <Chapter />}
        {storyState === "text" && <Text />}
        {storyState === "quiz" && <Quiz />}
        {storyState === "game" && <Game />}
      </StoryContext.Provider>{" "}
    </div>
  );
}
