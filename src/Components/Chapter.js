import { useState } from "react";

import "./styles/Chapter.css";

// determines the number of items shown per slide
const PAGE_SIZE = 8;

export default function Chapter({ chapter, currentPage, setCurrentPage }) {
  // create custom hook to manage chapter data
  const [currentChapterPage, setCurrentChapterPage] = useState(1);
  const numberOfItems = chapter.content.length;
  const numberOfPages = Math.ceil(numberOfItems / PAGE_SIZE);

  const firstDataIndex = (currentChapterPage - 1) * PAGE_SIZE;
  const lastDataIndex = firstDataIndex + PAGE_SIZE;
  console.log(chapter.content.slice(firstDataIndex, lastDataIndex));

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
        <h1 className="chapter-title">{`Chapter ${chapter.chapter_number}`}</h1>
      </div>
      <div className="right-page">
        <button onClick={onPageChange}>next page</button>
      </div>
    </>
  );
}

// {
//   {
//     story
//       .filter((pannel) => pannel.page === currentPage)[0]
//       .content.map((item) => {
//         switch (item.type) {
//           case "title":
//             return <h1>{item.title}</h1>;
//           case "paragraph":
//             return <p key={item.page}>{item.text}</p>;
//           case "image":
//             return <img width="200px" src={item.image} alt={item.type}></img>;
//           default:
//             break;
//         }
//       });
//   }
// }

// {
//   item.type === "title" && <h1>{item.title}</h1>;
// }
