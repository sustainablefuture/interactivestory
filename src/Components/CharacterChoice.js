import { characters } from "../Data/Characters";
import "./styles/CharacterChoice.css";
import yay from "../Images/yay.png";

export default function CharacterChoice({ selectedChar }) {
  const selectedCharInfo = characters.find(({ id }) => selectedChar === id);
  return (
    <>
      <div className="character-choice">
        <h1>{selectedCharInfo?.name}</h1>
        <img
          width="250px"
          alt={selectedCharInfo?.name}
          src={selectedCharInfo?.img}
        />
      </div>
      {selectedChar ? <img alt="yay" src={yay} width="150px" /> : ""}
    </>
  );
}

// checked
