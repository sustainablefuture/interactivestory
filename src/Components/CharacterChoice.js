import { characters } from "../Data/Characters";
import "./styles/CharacterChoice.css";

export default function CharacterChoice({ selectedChar }) {
  const selectedCharInfo = characters.find(({ id }) => selectedChar === id);
  return (
    <div className="character-choice">
      <h1>{selectedCharInfo?.name}</h1>
      <img alt={selectedCharInfo?.name} src={selectedCharInfo?.img} />
    </div>
  );
}

// checked
