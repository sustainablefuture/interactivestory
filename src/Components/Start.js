import { useContext } from "react";
import { StoryContext } from "../Helpers/Context";

export default function Intro({ currentPage, setCurrentPage }) {
  const { setStoryState } = useContext(StoryContext);
  return (
    <div className="menu">
      <h1>Are you ready to save the world?</h1>
      <button
        className="startbutton"
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        Start
      </button>
    </div>
  );
}

// checked
