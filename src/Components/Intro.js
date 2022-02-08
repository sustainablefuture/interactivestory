import kidsparkplace from "../Images/kidsparkplace.png";
import kidswater from "../Images/kidswater.png";
import illplastic from "../Images/illplastic.png";
import "./styles/Intro.css";

export default function Intro({ currentPage, setCurrentPage }) {
  return (
    <>
      <div className="left-page intro-left">
        <h1>Hey there!</h1>
        <h2> Do you wanna come on an adventure with us?</h2>
        <img src={kidsparkplace} width="400px" alt="" />
      </div>
      <div className="right-page intro-right">
        <h1>"Hahaha, catch me", says Timmy</h1>
        <img src={kidswater} width="300px" alt="" />
        <p>
          Do you like playing with your friends? So do Timmy and Lea. Today, you
          will follow them and their friends through their adventure and learn
          about the challenges they are facing while following the story, answer
          quizes and playing games.
          <br></br>
          <br></br>
        </p>
        <h2>So let's get started!</h2>
        <div className="introframe">
          <img src={illplastic} width="200px" alt="" />
        </div>
      </div>
      <button
        className="progress-button"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        next page
      </button>
    </>
  );
}

// checked
