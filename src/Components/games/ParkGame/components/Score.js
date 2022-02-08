import React from "react";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export default function Score() {
  const [character, setCharacter] = useRecoilState(
    atom({ key: "characterState", default: {} })
  );
  const score = useRecoilValue(atom({ key: "scoreState" }));
  const setGameOver = useSetRecoilState(atom({ key: "gameOverState" }));

  return (
    <div className="score-bar">
      {character && character.dead ? (
        <div
          className="button"
          onClick={() => {
            setGameOver(false);
            setCharacter({ x: 4, y: 8, dir: "up", dead: false });
          }}
        >
          RESTART
        </div>
      ) : (
        <>
          <span className="score">{score && `${4 - score} more to go!`}</span>
        </>
      )}
    </div>
  );
}
