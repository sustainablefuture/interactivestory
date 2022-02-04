import React, { useState, useContext } from "react";
import Book from "../images/book-ipad.png";

// import Start from "./Start";
// import Intro from "./Intro";
// import Chapter from "./Chapter";
// import { StoryContext } from "../Helpers/Context";
// import Game from "./Game";
// import Quiz from "./Quiz";
// import Text from "./Text";

export default function MainContent() {
  // const [storyState, setStoryState] = useState("start");
  return (
    <div
      style={{
        backgroundImage: `url(${Book})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className="main-content"
    >
      <div className="left-page"></div>
      <div className="right-page"></div>
      {/* <StoryContext.Provider value={{ storyState, setStoryState }}>
        {storyState === "start" && <Start />}
        {storyState === "intro" && <Intro />}
        {storyState === "chapter" && <Chapter />}
        {storyState === "text" && <Text />}
        {storyState === "quiz" && <Quiz />}
        {storyState === "game" && <Game />}
      </StoryContext.Provider> */}
    </div>
  );
}

// to be modified after the rest for responsiveness.
// Might be unecessary
