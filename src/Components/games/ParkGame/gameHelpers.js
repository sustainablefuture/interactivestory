import { WATER_TILES_Y_INDEXES } from "./constants";

export const isDrowning = (character, lilyPads) => {
  const isRiding = isRidingLilyPad(character, lilyPads);
  if (WATER_TILES_Y_INDEXES.includes(character.y) && !isRiding) {
    return true;
  } else {
    return false;
  }
};

export const isRidingLilyPad = (character, lilyPads) => {
  return lilyPads.some((lilyPad) => {
    return lilyPad.x === character.x && lilyPad.y === character.y;
  });
};

export const getRiddenLilyPad = (character, lilyPads) => {
  return lilyPads.find((lilyPad) => {
    return Math.abs(lilyPad.x - character.x) <= 1 && lilyPad.y === character.y;
  });
};

export const isTrashesCollision = (character, trashes) => {
  return trashes.find((trash) => {
    return trash.x === character.x && trash.y === character.y;
  });
};

export const isBinCollision = (character, bin) => {
  return bin.x === character.x && bin.y === character.y;
};

export const objectsIdentical = (object1, object2) => {
  return JSON.stringify(object1) === JSON.stringify(object2);
};
