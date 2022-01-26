import React, { useContext } from "react";
import { StoryContext } from "../Helpers/Context";

export default function Intro() {
  const { storyState, setStoryState } = useContext(StoryContext);
  return <div className="menu">This is the intro</div>;
}
