import { atom, useRecoilValue } from "recoil";
import { WORLD_SIZE, TILE_ASPECT_RATIO } from "../constants";
import { Paper, Bottle, PlasticBottle, Can } from "../images";
import { v4 } from "uuid";

function Trashes() {
  // manage trash spawn + uuid + random position / trash type
  const trashesState = atom({
    key: "trashesState",
    default: [
      {
        x: 1,
        y: 7,
        type: Paper,
        id: v4(),
      },
      {
        x: 2,
        y: 7,
        type: Paper,
        id: v4(),
      },
      {
        x: 3,
        y: 7,
        type: Paper,
        id: v4(),
      },
      {
        x: 4,
        y: 7,
        type: Paper,
        id: v4(),
      },
      {
        x: 2,
        y: 4,
        type: Bottle,
        id: v4(),
      },
      {
        x: 7,
        y: 3,
        type: PlasticBottle,
        id: v4(),
      },
      {
        x: 1,
        y: 0,
        type: Can,
        id: v4(),
      },
    ],
  });
  const trashes = useRecoilValue(trashesState);

  return (
    <>
      {trashes.map((trash) => {
        const yOffset = ((100 / WORLD_SIZE) * TILE_ASPECT_RATIO) / 1.8;
        const yBase = yOffset * trash.y + yOffset / 1.8;
        const xBase = 50 - (100 / 18) * trash.y;
        const xAbs = xBase + (50 / 9) * trash.x;
        const yAbs = yBase + yOffset * trash.x;

        return (
          <img
            src={trash.type}
            className="trashes"
            style={{ top: `${yAbs}%`, left: `${xAbs}%` }}
            alt="trash"
            key={trash.id}
          ></img>
        );
      })}
    </>
  );
}

export default Trashes;
