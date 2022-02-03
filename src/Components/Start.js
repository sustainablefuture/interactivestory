import { useContext } from "react";
import { StoryContext } from "../Helpers/Context";

export default function Intro() {
  const { setStoryState } = useContext(StoryContext);
  return (
    <div className="menu">
      <h1>Are you ready to save the world?</h1>
      <button
        onClick={() => {
          setStoryState("intro");
        }}
      >
        Start
      </button>
    </div>
  );
}

// checked
