import { useState } from "react";
import { story } from "../Data/Story";

export default function Chapter() {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <div className="left-page">
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
      </div>
    </>
  );
}

// Checked
// Add pagination logic
// Add storystate change logic at the end
