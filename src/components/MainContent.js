import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Book from "../Images/book.png";
import { StoryContext } from "../Helpers/Context";
import Start from "./Start";
import Intro from "./Intro";
import CharacterSelection from "./CharacterSelection.js";
import Chapter from "./Chapter";
import Game from "./Game";
import Text from "./Text";
import Quiz from "./Quiz";
import BetterChoices from "./BetterChoices";

const bookBackgroundStyles = {
  backgroundImage: `url(${Book})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

export default function MainContent({ selectChar, selectedChar, story }) {
  const [score, setScore] = useLocalStorage("score", 0);
  const [currentPage, setCurrentPage] = useLocalStorage("page", 0);

  if (currentPage > 6 || currentPage < 0) {
    setCurrentPage(0);
  }

  const storyState = story[currentPage].type;

  return (
    <div style={bookBackgroundStyles} className="main-content">
      <StoryContext.Provider value={{ storyState, score, setScore }}>
        {storyState === "start" && <Start />}
        {storyState === "intro" && <Intro />}
        {storyState === "select" && (
          <CharacterSelection
            selectedChar={selectedChar}
            selectChar={selectChar}
          />
        )}
        {storyState === "chapter" && (
          <Chapter
            chapter={story[currentPage]}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        {storyState === "text" && <Text />}
        {storyState === "quiz" && <Quiz />}
        {storyState === "choice" && <BetterChoices />}
        {storyState === "game" && <Game />}
      </StoryContext.Provider>{" "}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className="prev-button"
      >
        back
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="next-button"
      >
        next
      </button>
    </div>
  );
}

// Checked
// Should storystate button change be related to chapterpage change button?
