import ParkGame from "./games/ParkGame/components/ParkGame";
import { RecoilRoot } from "recoil";

export default function Game({ name }) {
  return (
    <div className="game-screen">
      <RecoilRoot>{name === "ParkGame" && <ParkGame />}</RecoilRoot>

      {/* <iframe
          src="https://jennyy89.github.io/whackabottle/"
          title="whackabottlegame"
        ></iframe> */}
    </div>
  );
}
