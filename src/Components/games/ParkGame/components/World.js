import React from "react";
import Landscape from "./Landscape";
import LilyPad from "./LilyPad";
import Character from "./Character";
import Bin from "./Bin";
import Trashes from "./Trashes";

export default function World() {
  return (
    <div className="world">
      <Landscape />
      <LilyPad />
      <Character />
      <Bin />
      <Trashes />
    </div>
  );
}
