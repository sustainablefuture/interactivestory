import plastic from "../Images/plastic.jpg";
import singleuse from "../Images/single-use.jpg";
import balls from "../Images/balls.jpg";
import brush from "../Images/brush.jpg";
import bottlebeach from "../Images/bottlebeach.jpg";

const questions = [
  {
    id: 1,
    img: plastic,
    question: "What is plastic made of?",
    answerOptions: [
      { answer: "Plants", id: 1, isCorrect: false },
      { answer: "Crushed up rock and glue", id: 2, isCorrect: false },
      { answer: "Oil, coal, gas, and chemicals", id: 3, isCorrect: true },
      { answer: "Water", id: 4, isCorrect: false },
    ],
    explanation:
      "Plastic is a kind of material that is made by people and can be formed into almost any shape. Most plastics are made from chemicals that come from petroleum (oil), natural gas, or coal. Heating these chemicals causes them to break down into molecules. Molecules are groups of two or more atoms, which are the tiny building blocks of everything. Scientists then join these molecules into chains. These chains make up plastics.",
  },
  {
    id: 2,
    img: singleuse,
    question: "What is single-use plastic?",
    answerOptions: [
      {
        answer: "Objects that are made to be used by just one person",
        id: 1,
        isCorrect: false,
      },
      {
        answer: "Objects that are made to be used once and thrown away",
        id: 2,
        isCorrect: true,
      },
      {
        answer: "Objects that can be used again and again",
        id: 3,
        isCorrect: false,
      },

      { answer: "Objects that are used by animals", id: 4, isCorrect: false },
    ],
    explanation:
      "Single-use plastics are any kind of plastic tool that we use one time and then throw away. Things like plastic straws, forks, knives, spoons, water/soda bottles and plastic grocery bags are all examples of single-use plastics.",
  },
  {
    id: 3,
    img: brush,
    question: "Which is NOT a single-use plastic item ?",
    answerOptions: [
      { answer: "Shampoo bottle", id: 1, isCorrect: false },
      { answer: "Straw", id: 2, isCorrect: false },
      { answer: "Lego", id: 3, isCorrect: true },
      { answer: "A potato chip bag", id: 4, isCorrect: false },
    ],
    explanation:
      "Even though Lego items are made out of plastic, it can be played with many times.",
  },
  {
    id: 4,
    img: balls,
    question: "What is not made out of plastic?",
    answerOptions: [
      { answer: "Chewing gum", id: 1, isCorrect: false },
      { answer: "wooden cooking spoon", id: 2, isCorrect: true },
      { answer: "Shampoo", id: 3, isCorrect: false },
      { answer: "wet wipes", id: 4, isCorrect: false },
    ],
    explanation:
      "The wooden cooking spoon is usually made of natural wood and does not contain plastic. Chewing gums are mostly made of petroleum-based plastic polymers, and wet wipes and shampoo also often contain polyester or polypropylene.",
  },
  {
    id: 5,
    img: bottlebeach,
    question: "What happens to a plastic bottle if you bury it in the ground?",
    answerOptions: [
      { answer: "It turns into rock.", id: 1, isCorrect: false },
      { answer: "It breaks down and disappears.", id: 2, isCorrect: false },
      { answer: "It comes up again.", id: 3, isCorrect: false },
      {
        answer: "It breaks up into tiny pieces but does not disappear.",
        id: 4,
        isCorrect: true,
      },
    ],
    explanation:
      "Plastic can not be decomposed to smaller products. Instead it breaks into tiny pieces and does not disappear.",
  },
];

export { questions };
