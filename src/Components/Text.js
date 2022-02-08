import { knowledgedata } from "../Data/KnowledgeData";

export default function Text() {
  return (
    <>
      <div className="left-page">
        <h1>Lesson</h1>
        {knowledgedata.map((leftContent) => {
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
        {knowledgedata.map((rightContent) => {
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
    </>
  );
}

// checked
