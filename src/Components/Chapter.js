import React, { useContext } from "react";
import { StoryContext } from "../Helpers/Context";

export default function Chapter() {
  const { storyState, setStoryState } = useContext(StoryContext);
  return <div className="menu">This is the Chapter</div>;
}
