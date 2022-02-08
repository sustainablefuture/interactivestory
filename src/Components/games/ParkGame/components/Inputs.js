import { useCallback, useEffect, useRef } from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";

export default function Inputs() {
  const characterState = atom({
    key: "characterState",
    default: { x: 4, y: 8, dir: "up", dead: false, trash: false },
  });

  const [character, setCharacter] = useRecoilState(characterState);

  const allowInputState = atom({
    key: "allowInputState",
    default: true,
  });

  const [allowInput, setAllowInput] = useRecoilState(allowInputState);
  const gameOver = useRecoilValue(atom({ key: "gameOverState" }));

  let timer = useRef(false);
  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, [timer]);

  const keyPressHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (gameOver || !allowInput) {
        return;
      }
      if (e.keyCode === 37) {
        setCharacter({
          ...character,
          x: character.x > 0 ? character.x - 1 : character.x,
          y: character.y,
          dir: "left",
        });
      } else if (e.keyCode === 39) {
        setCharacter({
          ...character,
          x: character.x < 8 ? character.x + 1 : character.x,
          y: character.y,
          dir: "right",
        });
      } else if (e.keyCode === 38) {
        setCharacter({
          ...character,
          x: character.x,
          y: character.y > 0 ? character.y - 1 : character.y,
          dir: "up",
        });
      } else if (e.keyCode === 40) {
        setCharacter({
          ...character,
          x: character.x,
          y: character.y < 8 ? character.y + 1 : character.y,
          dir: "down",
        });
      }
      setAllowInput(false);
      timer.current = setTimeout(() => {
        setAllowInput(true);
      }, 350);
    },
    [character, setCharacter, gameOver, allowInput, setAllowInput]
  );

  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, [keyPressHandler]);

  return <div></div>;
}
