//images
import excitedkids from "../Images/excited kids.png";
import grandma from "../Images/gradnma.png";
import beach from "../Images/beach.png";
import castle from "../Images/castle.png";
import dirtypark from "../Images/dirtypark.png";
import kidscircle from "../Images/kidscircle.png";
import tree from "../Images/tree.png";
import trees from "../Images/trees.png";
import kidshideandseek from "../Images/kidshideandseek.png";
import bastian from "../Images/bastian.png";
import kidsWater from "../Images/kidswater.png";
import raisedHand from "../Images/raised_hand.jpg";
import dirtyRiver from "../Images/dirty_river.jpg";
import riverCleaning from "../Images/river_cleaning.jpg";
import happyGrandma from "../Images/happy_grandma.jpg";
import cleanPark from "../Images/kidsparkplace.png";
import recycling from "../Images/recycling.png";
import kidsWalking from "../Images/kids_walking.png";

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
        image: excitedkids,
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
        image: grandma,
      },
      {
        type: "paragraph",
        text: "When they arrive at the park, <character> and <his/her> friends start running toward the playground to play together. Grandma Ania watches them run past her with a caring smile on her face.",
      },
      {
        type: "image",
        image: kidshideandseek,
      },
      {
        type: "paragraph",
        text: "After a few minutes of playing in the grass and around the trees, <character> comes back to Ania and she can see on <his/her> face that something is wrong. She asks first: “Hey, <character>, what seems to be the problem?”. Raising <his/her> face to her, <he/she> answers: “We were playing in the bushes there”. <he/she> turns around to point a bit further and continues: “It’s full of garbage and other stuff that we put in the garbage at home.”. The older lady looks up with a bit more attention at the playground and realizes that the park is more or less covered with litter.",
      },
      {
        type: "image",
        image: dirtypark,
      },
      {
        type: "paragraph",
        text: "She shakes her head and puts her soft hand on <character>’s shoulder, saying: “You’re right that the park isn’t so nice to play in today. It seems to get worse every week we come here. You know what, why don’t you tell your friends to come here and I will tell you all a story.”",
      },

      {
        type: "paragraph",
        text: "Agreeing with a smile, <character> goes to get <his/her> friends and they all sit in front of the grandmother. She takes a deep breath and starts: “You know kids, when I was your age, I was also living around here.”. Raising her hand in front of her, she points toward a house a bit further down the street and resumes: “This was the house of my parents. I used to come here to play, just like you. There was only a swing back then, but we loved to come here and play. I even remember some of the trees that are still here.”. The children look at Ania with dreamy eyes, captured by the idea of something so far in the past.",
      },
      {
        type: "image",
        image: tree,
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
        image: trees,
      },
      {
        type: "paragraph",
        text: "<character> and <his/her> friends go back to the playground and they start talking: “My grandma is really sad now, I wish we could do something to cheer her up.”. The friends shake their heads in agreement and Sam answers: “Yes, I also feel sad from that, but what can we do?”. William, another one of their friends, adds: “Maybe we can ask our parents if they have an idea.”",
      },
      {
        type: "image",
        image: kidscircle,
      },
      {
        type: "paragraph",
        text: "After agreeing that this would be a smart idea, all the friends go back to Ania and start heading home. On the way, they feel a bit sad and don’t talk much. Ania reflects on a greener past while <character> hopes <he/she> will be able to find a solution to make <his/her> grandmother happy again.",
      },
    ],
  },
  {
    page: 5,
    type: "chapter",
    title: "A day at the beach",
    chapter_number: "2",
    sub_chapter_number: "1",
    content: [
      {
        type: "paragraph",
        text: "<character> gets up early in the morning. <He/She> is excited to go to the beach today. <He/She> first asks <his/her> parents about what they can do in the park, but they’re not too sure. They tell <him/her> that maybe a teacher or somebody knowing more could help them.",
      },
      {
        type: "image",
        image: beach,
      },
      {
        type: "paragraph",
        text: "After driving for thirty minutes, they get to the beach and meet with Sam and William who are also there with their parents. They start playing on the beach and make a big castle out of sand.",
      },
      {
        type: "image",
        image: castle,
      },
      {
        type: "paragraph",
        text: "Sam tells them : “Look! Something weird is floating in the water over there, next to the big rock.”. They all go and see that many water bottles are floating on the surface. There is also a little fish swimming through the trash and trying to eat the plastic pieces. William says : “<character>, we must not let it eat that! It’s not food and I think it’s dangerous to eat.”.",
      },
    ],
  },
  {
    page: 6,
    type: "game",
    name: "Whack-a-mole",
  },
  {
    page: 7,
    type: "chapter",
    title: "A day at the beach",
    chapter_number: "2",
    sub_chapter_number: "2",
    content: [
      {
        type: "paragraph",
        text: "After being saved by the group of friends, the fish tells them: “Thank you so much for saving me.”. After a moment of surprise, the kids sit down next to the water and <character> answers: “You’re welcome mr. fish, but why are you trying to eat the plastic if it’s not good for you?”. The fish swims around a bit before saying: “Oh, you can call me <companion>, now that you saved me, you are my friends.” Then, after taking a short pause, he answers them: “You know, to me in the water, it’s not always easy to make the difference between food and those small pieces of plastic. I have seen many of my family and friends eat those little pieces and get really sick.”",
      },
      {
        type: "image",
        image: bastian,
      },
      {
        type: "paragraph",
        text: "The friends and <companion> keep talking for a while and play in the water like they knew each other for a long time. <companion> is a really smart animal and he tells the kids so much about the problems that plastic pollution is bringing to the sea and it’s creatures.",
      },
    ],
  },
  {
    page: 8,
    type: "text",
  },
  {
    page: 9,
    type: "quiz",
  },
  {
    page: 10,
    type: "chapter",
    title: "A day at the beach",
    chapter_number: "2",
    sub_chapter_number: "3",
    content: [
      {
        type: "image",
        image: kidsWater,
      },
      {
        type: "paragraph",
        text: "At the end of the day, before they have to go back home, <companion> tells them : “You are my friends now, if you ever need me and are near water, just call my name and I’ll be there for you, always!”. Knowing that they had made a new friend, <character> and the friends went back home happy.",
      },
    ],
  },
  {
    page: 11,
    type: "chapter",
    title: "Back to school",
    chapter_number: "3",
    sub_chapter_number: "1",
    content: [
      {
        type: "image",
        image: raisedHand,
      },
      {
        type: "paragraph",
        text: "On Monday, it’s time to go back to school. <character> is eager to talk to Mrs Miller about <his/her> about what they could do to make the park a better place. At the beginning of the class, <he/she>  raises <his/her> hand and asks: “Mrs Miller, I went to the park the other day and it was full of trash and it was the same thing in the water at the beach. It makes me really sad.”.",
      },
      {
        type: "paragraph",
        text: "Mrs Miller looks at <him/her> with a lot of compassion and answers: “I understand your sadness <character>. I think today we can skip the normal lesson and talk about pollution.”",
      },
    ],
  },
  {
    page: 12,
    type: "text",
  },
  {
    page: 13,
    type: "quiz",
  },
  {
    page: 14,
    type: "chapter",
    title: "Back to school",
    chapter_number: "3",
    sub_chapter_number: "2",
    content: [
      {
        type: "paragraph",
        text: "At the end of the class, Mrs Miller gives them an assignment: “When you go home, I want you to take a photo of your recycling bins at home and bring them for the next class.”",
      },
      {
        type: "image",
        image: recycling,
      },
      {
        type: "paragraph",
        text: "<character> has an idea and asks the class and Mrs Miller: “I think I understand better what I can do to help, but I don’t think I can do everything alone. Can I have your help after school to go clean the park? I think it would make Grandma happy.” The other kids answer enthusiastically and Mrs Miller adds: “I’ll be there for sure <character>, I am proud of you for taking the initiative.”",
      },
    ],
  },
  {
    page: 15,
    type: "text",
  },
  {
    page: 16,
    type: "chapter",
    title: "Making Grandma happy",
    chapter_number: "4",
    sub_chapter_number: "1",
    content: [
      {
        type: "image",
        image: kidsWalking,
      },
      {
        type: "paragraph",
        text: "With <his/her> whole class all excited to help, <character> goes to the park after the school day is over. Mrs Miller is coming with them and a few other adults from the school are also going.",
      },
      {
        type: "paragraph",
        text: "The park is still in a bad state, but everyone has their heart focused on making it cleaner and more welcoming to the local community.",
      },
      {
        type: "image",
        image: dirtypark,
      },
      {
        type: "paragraph",
        text: "<character> turns to <his/her> friends and other classmates to tell them: “Remember what we learned about recycling, don’t throw everything in the garbage.” <He/She> then points the different bins to them.",
      },
    ],
  },
  {
    page: 17,
    type: "game",
    name: "ParkGame",
  },
  {
    page: 18,
    type: "chapter",
    title: "Making Grandma happy",
    chapter_number: "4",
    sub_chapter_number: "2",
    content: [
      {
        type: "paragraph",
        text: "After the big effort to clean the park, everybody is quite tired from all the work, but <character> hears a faint sound in the distance. <He/She> tells <his/her> friends to come quick and they run towards the little river at the end of the park.",
      },
      {
        type: "image",
        image: dirtyRiver,
      },
      {
        type: "paragraph",
        text: "<companion> is there in the river with some of his animal friends, but it doesn’t seem good at all. The river is full of plastic bottles and other items. <character> tells <his/her> friends: “Come on, we need to help <companion> and all his friends. It’s good to have a clean park for us, but it’s important that everyone has a clean place to live and play.”",
      },
      {
        type: "paragraph",
        text: "Encouraged by the words, everybody is energized once again and together they work hard to pick up all the trash in the shallow water, making sure the plastic cannot hurt the animals anymore.",
      },
      {
        type: "image",
        image: riverCleaning,
      },
      {
        type: "paragraph",
        text: "With the park and the river finally clean <character> finally goes home for a well earned rest. Dreaming of clean parks and clean forest, playing there with <companion> and all <his/her> friends.",
      },
      {
        type: "image",
        image: cleanPark,
      },
      {
        type: "paragraph",
        text: "The very next day, after school, <he/she> takes <his/her> grandmother to the park. “Look Grandma! Look what we did.” Ania took a minute to look around her, she didn’t seem to believe her eyes. She looks tenderly at <character> and says: “This is the best gift I ever received. It feels just like in my youth. Now we just need to plant more trees, will you help me <character>?”.",
      },
      {
        type: "image",
        image: happyGrandma,
      },
      {
        type: "paragraph",
        text: "Full of joy from <his/her> accomplishments, <character> replies: “Of course Grandma!”.",
      },
      {
        type: "paragraph",
        text: "The End",
      },
    ],
  },
];

export { story };
