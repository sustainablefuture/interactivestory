const questions = [
  {
    question: "What is the capital of France?",
    answerOptions: [
      { answer: "New York", isCorrect: false },
      { answer: "London", isCorrect: false },
      { answer: "Paris", isCorrect: true },
      { answer: "Dublin", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Who is CEO of Tesla?",
    answerOptions: [
      { answer: "Jeff Bezos", id: 1, isCorrect: false },
      { answer: "Elon Musk", isCorrect: true },
      { answer: "Bill Gates", isCorrect: false },
      { answer: "Tony Stark", isCorrect: false },
    ],
  },
  {
    question: "The iPhone was created by which company?",
    answerOptions: [
      { answer: "Apple", isCorrect: true },
      { answer: "Intel", isCorrect: false },
      { answer: "Amazon", isCorrect: false },
      { answer: "Microsoft", isCorrect: false },
    ],
  },
  {
    question: "How many Harry Potter books are there?",
    answerOptions: [
      { answer: "1", isCorrect: false },
      { answer: "4", isCorrect: false },
      { answer: "6", isCorrect: false },
      { answer: "7", isCorrect: true },
    ],
  },
];

export { questions };
