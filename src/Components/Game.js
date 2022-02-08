import ParkGame from "./games/ParkGame/components/ParkGame";
import { RecoilRoot } from "recoil";

export default function Game() {
  return (
    <div className="game-screen">
      <RecoilRoot>
        <ParkGame />
        <iframe
          src="https://jennyy89.github.io/whackabottle/"
          title="whackabottlegame"
        ></iframe>
      </RecoilRoot>
    </div>
  );
}
