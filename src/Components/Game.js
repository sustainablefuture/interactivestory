import ParkGame from "./games/ParkGame/components/ParkGame";
import { RecoilRoot } from "recoil";

export default function Game() {
  return (
    <div className="game-screen">
      <RecoilRoot>
        <ParkGame />
      </RecoilRoot>
    </div>
  );
}
