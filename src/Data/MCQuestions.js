import plastic from "../Images/plastic.jpg";
import singleuse from "../Images/single-use.jpg";
import balls from "../Images/balls.jpg";
import brush from "../Images/brush.jpg";
import bottlebeach from "../Images/bottlebeach.jpg";
import ocean from "../Images/ocean.jpg";
import microplastic from "../Images/microplastic.jpg";
import plasticocean from "../Images/plasticocean.jpg";
import micro from "../Images/micro.jpg";
import turtle from "../Images/turtle.jpg";

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

  {
    id: 10,
    img: ocean,
    question: "Why Is The Ocean Important?",
    answerOptions: [
      { answer: "Because it looks good.", id: 1, isCorrect: false },
      { answer: "Because it produces fresh water.", id: 2, isCorrect: false },
      { answer: "Because you can swim in it.", id: 3, isCorrect: false },
      {
        answer: "Because it provides us with food,plants and oxygen.",
        id: 4,
        isCorrect: true,
      },
    ],
    explanation:
      "Oceans are a great source of food for people around the world. They also provide minerals, oil, and natural gas. Phytoplankton and algae create much of the world’s oxygen. Oceans also help to keep climates stable by storing heat from the Sun.",
  },
  {
    id: 11,
    img: plasticocean,
    question: "What happens to plastic trash when it gets into the ocean?",
    answerOptions: [
      {
        answer: "Sinks to the bottom and gets buried under the sand.",
        id: 1,
        isCorrect: false,
      },
      { answer: "It breaks down and disappears.", id: 2, isCorrect: false },
      {
        answer: "Dissolves and decomposes in the water.",
        id: 3,
        isCorrect: false,
      },
      {
        answer: "Breaks up into smaller and smaller pieces.",
        id: 4,
        isCorrect: true,
      },
    ],
    explanation:
      "Plastic can not be decomposed to smaller products. Instead it breaks into tiny pieces and does not disappear.",
  },
  {
    id: 12,
    img: microplastic,
    question: "What is Microplastic?",
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
      "Microplastics consist of tiny plastic particles that are hard to see with the eyes. They are formed when larger plastic parts decompose, but are also contained in cosmetics and care products. In shower gel, sunscreen and other products, they improve the cleansing effect or make them particularly creamy.",
  },
  {
    id: 13,
    img: turtle,
    question: "Why do turtles and other ocean animals eat plastic bags?",
    answerOptions: [
      { answer: "Because they taste nice.", id: 1, isCorrect: false },
      {
        answer: "Because it's easier than hunting.",
        id: 2,
        isCorrect: false,
      },
      {
        answer: "Because they can’t see very well underwater.",
        id: 3,
        isCorrect: false,
      },
      {
        answer: "They mistake it for real food.",
        id: 4,
        isCorrect: true,
      },
    ],
    explanation:
      "Animals eat plastic because it looks similar to their usual prey. As algae grows on plastic, the smell attracts animals that feed on it. Plastic can make animals sick and can get stuck in their stomachs.",
  },
  {
    id: 14,
    img: micro,
    question: "What happens if animals eat micro platic?",
    answerOptions: [
      { answer: "They get even more hungry.", id: 1, isCorrect: false },
      { answer: "They can swim faster.", id: 2, isCorrect: false },
      { answer: "They dive with it.", id: 3, isCorrect: false },
      {
        answer: "It makes their stomage sick.",
        id: 4,
        isCorrect: true,
      },
    ],
    explanation:
      "PWhen turtles eat plastic, it can block their intestinal system (their guts). Therefore, they can no longer eat properly, which can kill them.",
  },
  {
    id: 15,
    img: bottlebeach,
    question: "How does plastic get into the ocean?",
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
