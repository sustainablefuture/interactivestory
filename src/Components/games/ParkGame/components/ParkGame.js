import { useEffect } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import Score from "./Score";
import Winner from "./Winner";
import World from "./World";
import Inputs from "./Inputs";
import "../parkGame.css";
import {
  isDrowning,
  isBinCollision,
  isRidingLilyPad,
  isTrashesCollision,
  getRiddenLilyPad,
  objectsIdentical,
} from "../gameHelpers";
import { Paper, Bottle, PlasticBottle, Can } from "../images";
import { v4 } from "uuid";

export default function ParkGame() {
  const scoreState = atom({
    key: "scoreState",
    default: 0,
  });

  const characterState = atom({
    key: "characterState",
    default: { x: 4, y: 8, dir: "up", trash: false, dead: false },
  });

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

  const binState = atom({ key: "binState", default: { x: 0, y: 8 } });

  const [character, setCharacter] = useRecoilState(characterState);
  const [trashes, setTrashes] = useRecoilState(trashesState);
  const [score, setScore] = useRecoilState(scoreState);

  const [bin] = useRecoilState(binState);

  const [gameOver, setGameOver] = useRecoilState(
    atom({ key: "gameOverState", default: false })
  );

  const lilyPads = useRecoilValue(atom({ key: "lilyPadsState" }));

  // Check for trash collision

  useEffect(() => {
    if (trashes && isTrashesCollision(character, trashes) && !character.trash) {
      const tempTrashes = [...trashes];
      const trashId = isTrashesCollision(character, trashes).id;

      const index = tempTrashes
        .map((tempTrash) => tempTrash.id)
        .indexOf(trashId);
      tempTrashes.splice(index, 1);

      setTrashes(tempTrashes);
      setCharacter({
        ...character,
        trash: true,
      });
    }
  }, [character, setCharacter, trashes, setTrashes]);

  // Check for bin collision

  useEffect(() => {
    if (bin && isBinCollision(character, bin)) {
      if (character.trash) {
        setScore(score + 1);
        setCharacter({
          ...character,
          trash: false,
        });
      }
    }
  }, [character, bin, setCharacter, setScore, score]);

  // Check for lilypads interaction

  useEffect(() => {
    if (lilyPads && isDrowning(character, lilyPads)) {
      if (!gameOver) {
        setGameOver(true);
      }
      if (!character.dead) {
        setCharacter({
          ...character,
          dead: true,
        });
      }
    } else if (lilyPads && isRidingLilyPad(character, lilyPads)) {
      const lilyPad = getRiddenLilyPad(character, lilyPads);
      if (
        !objectsIdentical(character, {
          ...character,
          x: lilyPad.x,
          y: lilyPad.y,
        })
      ) {
        setCharacter({
          ...character,
          x: lilyPad.x,
          y: lilyPad.y,
        });
      }
    }
  }, [character, lilyPads, setCharacter, gameOver, setGameOver]);

  return (
    <div>
      {score < 4 && <Score />}
      {score >= 4 && <Winner />}
      <World />
      <Inputs />
    </div>
  );
}
