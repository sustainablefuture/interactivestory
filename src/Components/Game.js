import ParkGame from "./games/ParkGame/components/ParkGame";
import { RecoilRoot } from "recoil";

export default function Game({ name }) {
  return (
    <div className="game-screen">
      <RecoilRoot>{name === "ParkGame" && <ParkGame />}</RecoilRoot>
    </div>
  );
}
