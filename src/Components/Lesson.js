import "./styles/lesson.css";
import { v4 } from "uuid";

export default function Lesson({ lesson, currentPage, setCurrentPage }) {
  return (
    <>
      <div className="left-page lesson-left">
        <h1 key={v4()} className="lesson-title">{`Lesson: ${lesson.title}`}</h1>
        {lesson.content.map((leftContent) => {
          if (leftContent.type === "image") {
            return (
              <img
                className="lesson-image"
                src={leftContent.image}
                alt=""
                key={v4()}
              ></img>
            );
          }
          if (leftContent.type === "text") {
            return <p key={v4()}>{leftContent.text}</p>;
          }
        })}
      </div>
      <div className="right-page lesson-right">
        {lesson.content.map((rightContent) => {
          if (rightContent.type === "video") {
            return (
              <iframe
                key={v4()}
                width="560"
                height="315"
                src={rightContent.link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            );
          }
        })}
      </div>
      <button
        className="progress-button"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        next page
      </button>
    </>
  );
}

// checked
