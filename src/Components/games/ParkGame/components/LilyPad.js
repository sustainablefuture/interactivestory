import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import { useInterval } from "../hooks/useInterval";
import MovingObject from "./MovingObject";
import { v4 } from "uuid";

export default function LilyPads() {
  const lilyPadsState = atom({
    key: "lilyPadsState",
    default: [
      {
        x: -1,
        y: 5,
        dir: "down",
        id: v4(),
      },
      {
        x: 9,
        y: 6,
        dir: "up",
        id: v4(),
      },
      {
        x: -1,
        y: 1,
        dir: "down",
        id: v4(),
      },
      {
        x: 9,
        y: 2,
        dir: "up",
        id: v4(),
      },
    ],
  });

  const [lilyPads, setLilyPads] = useRecoilState(lilyPadsState);

  const moveLilyPads = useCallback(() => {
    let lilyPadsCopy = [...lilyPads];

    lilyPadsCopy = lilyPadsCopy.map((lilyPad) => {
      if (lilyPad.dir === "up") {
        return {
          ...lilyPad,
          x: parseInt(lilyPad.x) - 1,
        };
      } else {
        return {
          ...lilyPad,
          x: parseInt(lilyPad.x) + 1,
        };
      }
    });

    const newLilyPads = [];

    if (
      !lilyPadsCopy.filter((lilyPad) => lilyPad.x === 7 || lilyPad.x === 1)
        .length
    ) {
      newLilyPads.push({
        x: 9,
        y: 6,
        dir: "up",
        id: v4(),
      });
      newLilyPads.push({
        x: -1,
        y: 5,
        dir: "down",
        id: v4(),
      });
      newLilyPads.push({
        x: 9,
        y: 2,
        dir: "up",
        id: v4(),
      });
      newLilyPads.push({
        x: -1,
        y: 1,
        dir: "down",
        id: v4(),
      });
    }
    setLilyPads(
      lilyPadsCopy
        .filter((lilyPad) => {
          return lilyPad.x >= -1 && lilyPad.x <= 9;
        })
        .concat(newLilyPads)
    );
  }, [lilyPads, setLilyPads]);

  useInterval(() => {
    moveLilyPads();
  }, 350);

  return (
    <>
      {lilyPads.map((lilyPad) => {
        return (
          <MovingObject
            key={lilyPad.id}
            x={lilyPad.x - 0.7}
            y={lilyPad.y}
            dir={lilyPad.dir}
            type="lilypad"
          />
        );
      })}
    </>
  );
}
