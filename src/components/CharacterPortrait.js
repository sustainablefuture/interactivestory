import { characters } from "../Data/Characters";
import Polaroid from "../Images/polaroid.png";

export default function CharacterPortrait({ selectedChar }) {
  const selectedCharInfo = characters.find(({ id }) => selectedChar === id);
  return (
    <div
      style={{
        backgroundImage: `url(${Polaroid})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
      className="character-portrait"
    >
      <img
        className="portrait-img"
        alt={selectedCharInfo?.name}
        src={selectedCharInfo?.img}
      />
    </div>
  );
}

// checked
// What does the "?" bring for the character data again?
