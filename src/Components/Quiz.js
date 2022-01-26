import React, { useContext } from "react";
import { StoryContext } from "../Helpers/Context";

export default function Quiz() {
  const { storyState, setStoryState } = useContext(StoryContext);
  return <div className="menu">This is a Quiz</div>;
}
