import "./styles/CharacterSelection.css";
import { characters } from "../Data/Characters";
import CharacterChoice from "./CharacterChoice";
import { Card, ListGroup } from "react-bootstrap";

export default function CharacterSelection({
  selectChar,
  selectedChar,
  currentPage,
  setCurrentPage,
}) {
  const clickCharacter = (id) => {
    selectChar(id);
  };

  return (
    <>
      <div className="left-page">
        <div className="characterContainer selection-left">
          <div className="charhead">
            <h1>With which character do you want to go into the adventure?</h1>
          </div>
          <div className="charboxes">
            {characters.map((character) => (
              <Card border="primary" key={character.id}>
                <Card.Header as="h3" style={{ background: character.color }}>
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
                    <ListGroup.Item>
                      <ul
                        style={{ border: `solid 4px ${character.color}` }}
                        className="selection-list"
                      >
                        {character.characteristics.map((characteristic) => (
                          <li>{characteristic}</li>
                        ))}
                      </ul>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        <h2>Click on the character of your choice</h2>
      </div>
      <div className="right-page selection-right">
        <div className="">
          <h2>You selected:</h2>
          {<CharacterChoice selectedChar={selectedChar} />}
        </div>
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
