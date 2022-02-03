import React, { useState, useContext } from "react";
import { story } from "../Data/Story";
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
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div
      style={{
        backgroundImage: `url(${Book})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className="main-content"
    >
      {/*validate for null data */}
      {/* <div className="left-page">
        {story
          .filter((pannel) => pannel.page === currentPage)[0]
          .content.map((item) => {
            switch (item.type) {
              case "title":
                return <h1>{item.title}</h1>;
              case "paragraph":
                return <p key={item.page}>{item.text}</p>;
              case "image":
                return (
                  <img width="200px" src={item.image} alt={item.type}></img>
                );
              default:
                break;
            }
          })}
      </div>
      <div className="right-page">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="next-button"
        >
          back
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="next-button"
        >
          next
        </button>
      </div> */}
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
