//images
import boy from "../images/boy.PNG";
import girl from "../images/girl.PNG";

const story = [
  {
    page: 1,
    type: "start",
  },
  {
    page: 2,
    type: "intro",
  },
  {
    page: 3,
    type: "select",
  },
  {
    page: 4,
    type: "chapter",
    title: "An afternoon at the park",
    chapter_number: "1",
    sub_chapter_number: "1",
    content: [
      {
        type: "image",
        image: boy,
      },
      {
        type: "paragraph",
        text: "It is a sunny and warm Friday afternoon and <character> is feeling very happy. It is the favorite time of the week for <him/her>, it is the time <he/she> gets to go play at the park. Like usual, grandma Ania is waiting in the school yard to accompany <him/her> and the friends coming along. At this time of the day, most parents are still working, but <character> is always happy to spend a good time with grandma and <his/her> friends.",
      },
      {
        type: "paragraph",
        text: "On the way to the park, grandma Ania asks <character>: “Paul is not coming with us today?”. <character> looks at the older lady with a smile and says: “Oh no, he has to go to the dentist with his mom today.” The grandmother nods her approbation and they keep walking a couple more minutes until they reach the park.",
      },
      {
        type: "image",
        image: girl,
      },
      {
        type: "paragraph",
        text: "When they arrive at the park, <character> and <his/her> friends start running toward the playground to play together. Grandma Ania watches them run past her with a caring smile on her face.",
      },
      {
        type: "paragraph",
        text: "After a few minutes of playing in the grass and around the trees, <character> comes back to Ania and she can see on <his/her> face that something is wrong. She asks first: “Hey, <character>, what seems to be the problem?”. Raising <his/her> face to her, <he/she> answers: “We were playing in the bushes there”. <he/she> turns around to point a bit further and continues: “It’s full of garbage and other stuff that we put in the garbage at home.”. The older lady looks up with a bit more attention at the playground and realizes that the park is more or less covered with litter.",
      },
      {
        type: "paragraph",
        text: "She shakes her head and puts her soft hand on <character>’s shoulder, saying: “You’re right that the park isn’t so nice to play in today. It seems to get worse every week we come here. You know what, why don’t you tell your friends to come here and I will tell you all a story.”",
      },
      {
        type: "image",
        image: boy,
      },
      {
        type: "paragraph",
        text: "Agreeing with a smile, <character> goes to get <his/her> friends and they all sit in front of the grandmother. She takes a deep breath and starts: “You know kids, when I was your age, I was also living around here.”. Raising her hand in front of her, she points toward a house a bit further down the street and resumes: “This was the house of my parents. I used to come here to play, just like you. There was only a swing back then, but we loved to come here and play. I even remember some of the trees that are still here.”. The children look at Ania with dreamy eyes, captured by the idea of something so far in the past.",
      },
      {
        type: "paragraph",
        text: "Sam, one of <character>'s friends, asks her: “Wow, is it true that trees can live that long?”. The older lady looks at her and she answers after a friendly laugh: “Oh, of course, they are quite older than me and they will live for many more years. That is, if we take care of them. With how the park is today, I’m not sure that people are really realizing the importance of that.”",
      },
      {
        type: "paragraph",
        text: "After taking a small break to look around, she continues: “In my memories, there were a lot more trees and a lot more places to play hide and seek.” She then looks at the kids and realizes that she didn’t really succeed in cheering them up. They look a bit sad and she notices that is also how she feels. Not wanting to make it worse, she tells them to go and play a bit more before they have to head home.",
      },
      {
        type: "image",
        image: girl,
      },
      {
        type: "paragraph",
        text: "<character> and <his/her> friends go back to the playground and they start talking: “My grandma is really sad now, I wish we could do something to cheer her up.”. The friends shake their heads in agreement and Sam answers: “Yes, I also feel sad from that, but what can we do?”. William, another one of their friends, adds: “Maybe we can ask our parents if they have an idea.”",
      },
      {
        type: "paragraph",
        text: "After agreeing that this would be a smart idea, all the friends go back to Ania and start heading home. On the way, they feel a bit sad and don’t talk much. Ania reflects on a greener past while <character> hopes <he/she> will be able to find a solution to make <his/her> grandmother happy again.",
      },
      {
        type: "image",
        image: boy,
      },
    ],
  },
  {
    page: 5,
    type: "text",
  },
  {
    page: 6,
    type: "quiz",
  },
  {
    page: 7,
    type: "game",
  },
];

export { story };
