import React, { useState } from "react";
import Social from "../components/Social";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    // console.log("e: ", e.target.value);
    // if (e.target.name === 'name') {
    //   setName(e.target.value)
    // } else if (e.target.name === 'email') {
    //   setEmail(e.target.value);
    // } else if (e.target.name === 'message') {
    //   setMessage(e.target.value);
    // }
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        setMessage(e.target.value);
        break;
    }
  };

  const reset = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="condiv">
      <h1 className="subtopic">Contact Me</h1>
      <h3>Send me a message! I'll get right back to you 👋</h3>

      <form onSubmit={() => reset()}>
        <input
          className="inputFields"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Add Name..."
        ></input>
        <br></br>
        <input
          className="inputFields"
          name="email"
          type="text"
          value={email}
          onChange={handleChange}
          placeholder="Add Email..."
        ></input>
        <br></br>
        <textarea
          className="inputFields"
          name="message"
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Add Message..."
          style={{
            maxWidth: "500px",
            minWidth: "500px",
            maxHeight: "200px",
            minHeight: "50px",
          }}
          onSubmit={handleChange}
        ></textarea>
        <br></br>
        <button className="submitButton" onClick={() => reset()}>
          Blast Off!
        </button>
      </form>
      <Social />
    </div>
  );
}
export default Contact;
