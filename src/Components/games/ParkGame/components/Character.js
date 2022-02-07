import { atom, useRecoilValue } from "recoil";
import { WORLD_SIZE, TILE_ASPECT_RATIO } from "../constants";
import {
  characterUp,
  characterLeft,
  characterRight,
  characterDown,
  skull,
} from "../images";

function Character() {
  const characterState = atom({
    key: "characterState",
    default: {
      x: 4,
      y: 8,
      dir: "up",
      trash: false,
      dead: false,
    },
  });
  const character = useRecoilValue(characterState);
  const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 1.8;
  const yBase = yOffset * character.y + yOffset / 1.8;
  const xBase = 50 - (100 / 18) * character.y;
  const xAbs = xBase + (50 / 9) * character.x;
  const yAbs = yBase + yOffset * character.x;

  let src;
  if (character.dead) {
    src = skull;
  } else {
    switch (character.dir) {
      case "up":
        src = characterUp;
        break;
      case "down":
        src = characterDown;
        break;
      case "left":
        src = characterLeft;
        break;
      case "right":
        src = characterRight;
        break;
      default:
        break;
    }
  }

  return (
    <img
      src={src}
      className={`character ${character.dead && "dead"}`}
      style={{ top: `${yAbs}%`, left: `${xAbs}%` }}
      alt="character"
    ></img>
  );
}

export default Character;
