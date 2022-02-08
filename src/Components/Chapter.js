import { useState } from "react";

import "./styles/Chapter.css";

// determines the number of items shown per slide
const PAGE_SIZE = 6;

export default function Chapter({ chapter, currentPage, setCurrentPage }) {
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
      setCurrentPage(currentPage + 1);
      return;
    }
    setCurrentChapterPage(currentChapterPage + 1);
  };

  return (
    <>
      <div className="left-page">
        <h1 className="chapter-title">{`Chapter ${chapter.chapter_number}: ${chapter.title}`}</h1>
        {leftPageData.map((leftData) => {
          if (leftData.type === "paragraph") {
            return <p>{leftData.text}</p>;
          }

          if (leftData.type === "image") {
            // add a alt element
            return <img src={leftData.image} alt=""></img>;
          }
        })}
      </div>
      <div className="right-page">
        {rightPageData.map((rightData) => {
          if (rightData.type === "paragraph") {
            return <p>{rightData.text}</p>;
          }

          if (rightData.type === "image") {
            // add a alt element
            return <img src={rightData.image} alt=""></img>;
          }
        })}
      </div>
      {/* <button onClick={onPageChange}>next page</button> */}
    </>
  );
}
