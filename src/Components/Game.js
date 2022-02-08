import ParkGame from "./games/ParkGame/components/ParkGame";
import { RecoilRoot } from "recoil";

export default function Game({ name, currentPage, setCurrentPage }) {
  return (
    <>
      <div className="game-screen">
        <RecoilRoot>{name === "ParkGame" && <ParkGame />}</RecoilRoot>

        {name === "Whack-a-bottle" && (
          <iframe
            className="game-frame"
            src="https://jennyy89.github.io/whackabottle/"
            title="whackabottlegame"
          ></iframe>
        )}
      </div>
      <button
        className="progress-button"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        next page
      </button>
    </>
  );
}
