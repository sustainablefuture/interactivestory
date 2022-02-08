import { atom, useRecoilValue } from "recoil";
import { WORLD_SIZE, TILE_ASPECT_RATIO } from "../constants";
import { BinImg } from "../images";

function Bin() {
  const binState = atom({
    key: "binState",
    default: {
      x: 0,
      y: 8,
    },
  });

  const bin = useRecoilValue(binState);

  const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 1.8;
  const yBase = yOffset * bin.y + yOffset / 1.8;
  const xBase = 50 - (100 / 18) * bin.y;
  const xAbs = xBase + (50 / 9) * bin.x;
  const yAbs = yBase + yOffset * bin.x;

  return (
    <img
      src={BinImg}
      className="bin"
      style={{ top: `${yAbs}%`, left: `${xAbs}%` }}
      alt="bin"
    ></img>
  );
}

export default Bin;
