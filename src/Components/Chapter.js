import { useState } from "react";
import { v4 } from "uuid";
import { TIMMY_TEXT, LEA_TEXT, COMPANION_NAME } from "../Data/constants";
import "./styles/Chapter.css";
import CompanionActivation from "./CompanionActivation";

// determines the number of items shown per slide
const PAGE_SIZE = 4;

export default function Chapter({
  chapter,
  currentPage,
  setCurrentPage,
  selectedChar,
  setIsCompanionVisible,
}) {
  const [currentChapterPage, setCurrentChapterPage] = useState(1);
  const numberOfItems = chapter.content.length;
  const numberOfPages = Math.ceil(numberOfItems / PAGE_SIZE);

  const firstDataIndex = (currentChapterPage - 1) * PAGE_SIZE;
  const lastDataIndex = firstDataIndex + PAGE_SIZE;

  const slideData = chapter.content.slice(firstDataIndex, lastDataIndex);

  const leftPageData =
    slideData.length > PAGE_SIZE / 2
      ? slideData.slice(0, PAGE_SIZE / 2)
      : slideData;
  const rightPageData = slideData.slice(PAGE_SIZE / 2);

  const onPageChange = () => {
    if (currentChapterPage === numberOfPages) {
      setCurrentChapterPage(1);
      setCurrentPage(currentPage + 1);
      return;
    }
    setCurrentChapterPage(currentChapterPage + 1);
  };

  const formatText = (text) => {
    const character = selectedChar - 1 ? TIMMY_TEXT : LEA_TEXT;

    const formatedText = text
      .replaceAll("<character>", character["<character>"])
      .replaceAll("<He/She>", character["<He/She>"])
      .replaceAll("<he/she>", character["<he/she>"])
      .replaceAll("<His/Her>", character["<His/Her>"])
      .replaceAll("<his/her>", character["<his/her>"])
      .replaceAll("<Him/Her>", character["<Him/Her>"])
      .replaceAll("<him/her>", character["<him/her>"])
      .replaceAll("<companion>", COMPANION_NAME);

    return formatedText;
  };

  return (
    <>
      <div className="left-page chapter-left">
        <h1 className="chapter-title">{`Chapter ${chapter.chapter_number}: ${chapter.title}`}</h1>
        {leftPageData.map((leftData) => {
          if (leftData.type === "paragraph") {
            const formatedText = formatText(leftData.text);
            return <p key={v4()}>{formatedText}</p>;
          }

          if (leftData.type === "image") {
            return (
              <img key={v4()} src={leftData.image} alt={leftData.image}></img>
            );
          }
        })}
      </div>
      <div className="right-page chapter-right">
        {rightPageData.map((rightData) => {
          if (rightData.type === "paragraph") {
            const formatedText = formatText(rightData.text);

            return <p key={v4()}>{formatedText}</p>;
          }

          if (rightData.type === "image") {
            return (
              <img key={v4()} src={rightData.image} alt={rightData.image}></img>
            );
          }

          if (rightData.type === "trigger") {
            return (
              <CompanionActivation
                key={v4()}
                setIsCompanionVisible={setIsCompanionVisible}
              />
            );
          }
        })}
      </div>
      <button className="progress-button" onClick={onPageChange}>
        next page
      </button>
    </>
  );
}
