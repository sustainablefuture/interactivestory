import { LilyPad } from "./../images";
import { WORLD_SIZE, TILE_ASPECT_RATIO } from "./../constants";

export default function MovingObject({ x, y, dir, type }) {
  const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 1.795;
  const yBase = yOffset * y + yOffset / 1.5;
  const xBase = 50 - (100 / 19) * y;
  const yAbs = yBase + yOffset * x;
  const xAbs = xBase + (100 / 18) * x;

  let src;
  switch (true) {
    case type === "lilypad" && dir === "up":
      src = LilyPad;
      break;
    case type === "lilypad" && dir === "down":
      src = LilyPad;
      break;
    default:
      break;
  }

  return (
    <img
      src={src}
      className={type}
      style={{
        left: `${xAbs}%`,
        top: `${yAbs}%`,
        opacity: x < 0 || x > 8 ? 0 : 1,
      }}
      alt={type}
    ></img>
  );
}
