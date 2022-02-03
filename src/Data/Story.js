//images
import boy from "../images/boy.PNG";
import girl from "../images/girl.PNG";

const story = [
  {
    page: 1,
    type: "text",
    content: [
      {
        type: "title",
        title: "Chapter 1",
      },
      {
        type: "paragraph",
        text: "It is a sunny and warm Friday afternoon and <character> is feeling very happy. It is the favorite time of the week for <him/her>, it is the time <he/she> gets to go play at the park. Like usual, grandma Ania is waiting in the school yard to accompany <him/her> and the friends coming along. At this time of the day, most parents are still working, but <character> is always happy to spend a good time with grandma and <his/her> friends",
      },
      {
        type: "image",
        image: boy,
      },
    ],
  },
  {
    page: 2,
    type: "text",
    content: [
      {
        type: "paragraph",
        text: "On the way to the park, grandma Ania asks <character>: “Paul is not coming with us today?”. <character> looks at the older lady with a smile and says: “Oh no, he has to go to the dentist with his mom today.” The grandmother nods her approbation and they keep walking a couple more minutes until they reach the park.",
      },
      {
        type: "image",
        image: girl,
      },
    ],
  },
];

export { story };
