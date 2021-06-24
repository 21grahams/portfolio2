import React from "react";
import ReactTypingEffect from "react-typing-effect";
import profilePic from "../img/graham_kirsh.png";
// import Social from "../components/Social";

function Home() {
  return (
    <div className="condiv home">
      <img src={profilePic} alt="ProfilePic" className="profilepic"></img>
      <ReactTypingEffect
        className="typingeffect"
        text={["Hi!", "I'm Graham Kirsh", "I am a software engineer", "I am a web developer", 'thanks for joining me here!']}
        speed={100}
        eraseDelay={700}
      />
      {/* <Social /> */}
    </div>
  );
}

export default Home;
