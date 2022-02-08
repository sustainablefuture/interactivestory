import { useContext } from "react";
// import { StoryContext } from "../Helpers/Context";
import "./styles/Start.css";

export default function Intro({ currentPage, setCurrentPage, setIsStarted }) {
  // const { setStoryState } = useContext(StoryContext);

  const onClick = () => {
    setCurrentPage(currentPage + 1);
    setIsStarted(true);
  };
  return (
    <div className="wrapper">
      <div className="waves">
        <div className="menu">
          <h1>Are you ready to save the world?</h1>
          <button className="startbutton" onClick={onClick}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

// checked
