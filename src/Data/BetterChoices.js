import bottle from "../Images/bottle.png";
import mehrweg from "../Images/mehrweg.png";
import yoghurt from "../Images/yoghurt.png";
import yoghurtglass from "../Images/yoghurtglass.png";

const choices = [
  {
    id: 1,
    options: [
      { id: 1, answer: bottle, isCorrect: false },
      { id: 2, answer: mehrweg, isCorrect: true },
    ],
    explanation:
      "Instead of using a plastic bottle, you can easily reuse the other one and refill water with it all the time",
  },
  {
    id: 2,
    options: [
      { id: 1, answer: yoghurtglass, isCorrect: true },
      { id: 2, answer: yoghurt, isCorrect: false },
    ],
    explanation:
      "Why not try to make your own Yoghurt? You can put it in a glass and add your favorite fruits or cereals.",
  },
  {
    id: 3,
    options: [
      { id: 1, answer: yoghurtglass, isCorrect: true },
      { id: 2, answer: yoghurt, isCorrect: false },
    ],
    explanation:
      "Why not try to make your own Yoghurt? You can put it in a glass and add your favorite fruits or cereals.",
  },
  {
    id: 4,
    options: [
      { id: 1, answer: yoghurtglass, isCorrect: true },
      { id: 2, answer: yoghurt, isCorrect: false },
    ],
    explanation:
      "Why not try to make your own Yoghurt? You can put it in a glass and add your favorite fruits or cereals.",
  },
  {
    id: 5,
    options: [
      { id: 1, answer: yoghurtglass, isCorrect: true },
      { id: 2, answer: yoghurt, isCorrect: false },
    ],
    explanation:
      "Why not try to make your own Yoghurt? You can put it in a glass and add your favorite fruits or cereals.",
  },
];

export { choices };
