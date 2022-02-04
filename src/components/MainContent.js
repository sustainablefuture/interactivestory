import { useState } from "react";
import Book from "../images/book.png";
import { StoryContext } from "../Helpers/Context";
import Start from "./Start";
import Intro from "./Intro";
import CharacterSelection from "./CharacterSelection.js";
import Chapter from "./Chapter";
import Game from "./Game";
import Quiz from "./Quiz";
import Text from "./Text";

const bookBackgroundStyles = {
  backgroundImage: `url(${Book})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

export default function MainContent({
  currentPage,
  setCurrentPage,
  storyState,
  selectChar,
  selectedChar,
  story,
}) {
  const [score, setScore] = useState(0);

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
