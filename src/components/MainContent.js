import useLocalStorage from "../hooks/useLocalStorage";
import Book from "../Images/book.png";
import Intro from "./Intro";
import CharacterSelection from "./CharacterSelection.js";
import Chapter from "./Chapter";
import Game from "./Game";
import Lesson from "./Lesson";
import Quiz from "./Quiz";
import BetterChoices from "./BetterChoices";

const bookBackgroundStyles = {
  backgroundImage: `url(${Book})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

export default function MainContent({ selectChar, selectedChar, story }) {
  // score to be implemented
  // const [score, setScore] = useLocalStorage("score", 0);
  const [currentPage, setCurrentPage] = useLocalStorage("page", 0);

  // protection during development
  if (currentPage > story.length - 1 || currentPage < 0) {
    setCurrentPage(0);
  }

  const storyState = story[currentPage].type;

  return (
    <div style={bookBackgroundStyles} className="main-content">
      {storyState === "intro" && (
        <Intro currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
      {storyState === "select" && (
        <CharacterSelection
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          selectedChar={selectedChar}
          selectChar={selectChar}
        />
      )}
      {storyState === "chapter" && (
        <Chapter
          chapter={story[currentPage]}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          selectedChar={selectedChar}
        />
      )}
      {storyState === "lesson" && (
        <Lesson
          lesson={story[currentPage]}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {storyState === "quiz" && (
        <Quiz
          quiz={story[currentPage]}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {storyState === "choice" && (
        <BetterChoices
          choices={story[currentPage].content}
          setCurrentPage={setCurrentPage}
        />
      )}
      {storyState === "game" && (
        <Game
          name={story[currentPage].name}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {/* dev buttons for demo + development */}
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
