export default function Text({ lesson, currentPage, setCurrentPage }) {
  return (
    <>
      <div className="left-page">
        <h1>Lesson</h1>
        {lesson.content.map((leftContent) => {
          if (leftContent.type === "image") {
            return (
              <img src={leftContent.image} alt="" key={leftContent.id}></img>
            );
          }
          if (leftContent.type === "text") {
            return <p>{leftContent.text}</p>;
          }
        })}
      </div>
      <div className="right-page">
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
        })}
      </div>
      <button className="progress-button" onClick={() => setCurrentPage(0)}>
        Restart the adventure
      </button>
    </>
  );
}

// checked
