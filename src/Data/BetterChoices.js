import bottle from "../Images/bottle.png";
import mehrweg from "../Images/mehrweg.png";

const choices = [
  {
    id: 20,
    options: [
      { id: 1, answer: bottle, isCorrect: false },
      { id: 2, answer: mehrweg, isCorrect: true },
    ],
  },
];

export { choices };
