import "./styles/CharacterSelection.css";
import { characters } from "../Data/Characters";
import CharacterChoice from "./CharacterChoice";
import { Card } from "react-bootstrap";

export default function CharacterSelection({ selectChar, selectedChar }) {
  const clickCharacter = (id) => {
    selectChar(id);
  };

  return (
    <div className="characterContainer">
      <div className="charhead">
        <h1>This is the beginning of a wonderful adventure.</h1>
        <h2>
          With which character do you wanna go into the adventure together?
        </h2>
      </div>
      <div className="charboxes">
        {characters.map((character) => (
          <Card style={{ width: "18rem" }} key={character.id}>
            <Card.Img
              key={character.id}
              variant="top"
              src={character.img}
              className={`charbox ${
                selectedChar === character.id ? "chosenCard" : ""
              }`}
              onClick={() => clickCharacter(character.id)}
              id={character.id}
            />
            <Card.Body>
              <Card.Title style={{ background: character.color }}>
                {character.name}
              </Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      <p>Click on the character of your choice</p>
      You selected:
      {<CharacterChoice selectedChar={selectedChar} />}
      <button>Next</button>
    </div>
  );
}

// checked
// need to add a left-right page division
// need to add characters characteristics and preferences
