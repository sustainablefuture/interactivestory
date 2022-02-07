import yoghurt from "../Images/yoghurt.png";
import yoghurtglass from "../Images/yoghurtglass.png";
import plasticbottle from "../Images/plasticbottle.png";
import refillablebottle from "../Images/refillablebottle.png";
import juicepack from "../Images/juice_pack.png";
import juiceglass from "../Images/juice_glass.png";
import plasticstraw from "../Images/plasticstraw.png";
import glasstraw from "../Images/glasstraw.png";
import apple from "../Images/apple.png";
import applewrapped from "../Images/applewrapped.png";
import pastastraw from "../Images/pastastraw.jpeg";
import pressedjuice from "../Images/pressedjuice.png";
import homemadeyoghurt from "../Images/homemadeyoghurt.png";
import refill from "../Images/refill.png";
import applebox from "../Images/applebox.png";

const choices = [
  {
    id: 1,
    options: [
      { id: 1, answer: plasticbottle, isCorrect: false },
      { id: 2, answer: refillablebottle, isCorrect: true },
    ],
    explanation:
      "Instead of using a plastic bottle, you can easily reuse the other one and refill water with it all the time. You can even add your favorite flavor to it.",
    img: refill,
  },
  {
    id: 2,
    options: [
      { id: 1, answer: yoghurtglass, isCorrect: true },
      { id: 2, answer: yoghurt, isCorrect: false },
    ],
    explanation:
      "Why not try to make your own Yoghurt? You can put it in a glass and add your favorite fruits or cereals.",
    img: homemadeyoghurt,
  },
  {
    id: 3,
    options: [
      { id: 1, answer: juiceglass, isCorrect: true },
      { id: 2, answer: juicepack, isCorrect: false },
    ],
    explanation:
      "Why not try to make your own Yoghurt? You can put it in a glass and add your favorite fruits or cereals.",
    img: pressedjuice,
  },
  {
    id: 4,
    options: [
      { id: 1, answer: plasticstraw, isCorrect: false },
      { id: 2, answer: glasstraw, isCorrect: true },
    ],
    explanation:
      "Instead of a plasticstraw, you can use glasstraws, paperstraws or even other things. Pro tip: Use macaronis as straw",
    img: pastastraw,
  },

  {
    id: 5,
    options: [
      { id: 1, answer: applewrapped, isCorrect: false },
      { id: 2, answer: apple, isCorrect: true },
    ],
    explanation:
      "Fruits don't need an extra wrapping around. Just take them without or put them in a tupperware",
    img: applebox,
  },
];

export { choices };
