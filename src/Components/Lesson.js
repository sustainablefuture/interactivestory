import "./styles/lesson.css";

export default function Text({ lesson, currentPage, setCurrentPage }) {
  return (
    <>
      <div className="left-page lesson-left">
        <h1 className="lesson-title">{`Lesson: ${lesson.title}`}</h1>
        {lesson.content.map((leftContent) => {
          if (leftContent.type === "image") {
            return (
              <img
                className="lesson-image"
                src={leftContent.image}
                alt=""
                key={leftContent.id}
              ></img>
            );
          }
          if (leftContent.type === "text") {
            return <p>{leftContent.text}</p>;
          }
          return <></>;
        })}
      </div>
      <div className="right-page lesson-right">
        {lesson.content.map((rightContent) => {
          if (rightContent.type === "video") {
            return (
              <iframe
                width="560"
                height="315"
                src={rightContent.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            );
          }
          return <></>;
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
