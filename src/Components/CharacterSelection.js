import "./styles/CharacterSelection.css";
import { characters } from "../Data/Characters";
import CharacterChoice from "./CharacterChoice";
import { Card, ListGroup } from "react-bootstrap";

export default function CharacterSelection({ selectChar, selectedChar }) {
  const clickCharacter = (id) => {
    selectChar(id);
  };

  return (
    <>
      <div className="left-page">
        <div className="characterContainer">
          <div className="charhead">
            <h1>With which character do you want to go into the adventure?</h1>
          </div>
          <div className="charboxes">
            {characters.map((character) => (
              <Card border="primary" key={character.id}>
                <Card.Header as="h5" style={{ background: character.color }}>
                  {character.name}
                </Card.Header>
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
                    What I like:
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>{character.characteristics}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}

            <p>Click on the character of your choice</p>
          </div>
        </div>
      </div>
      <div className="right-page">
        <div className="">
          <h2>You selected:</h2>
          {<CharacterChoice selectedChar={selectedChar} />}
        </div>
      </div>
    </>
  );
}

// checked
// need to add a left-right page division
// need to add characters characteristics and preferences
