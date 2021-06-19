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

  const reset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="condiv">
      <h1 className="subtopic">Contact Me</h1>
      <h3>Email : graham.kirsh@gmail.com</h3>
      <h3>Github : github.com/21grahams/</h3>
      <h3>LinkedIn : www.linkedin.com/in/graham-kirsh</h3>

      <form onSubmit={() => reset()}>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        ></input>
        <input
          name="email"
          type="text"
          value={email}
          onChange={handleChange}
        ></input>
        <input
          name="message"
          type="text"
          value={message}
          onChange={handleChange}
        ></input>

        <button onClick={() => reset()}>Go!</button>
      </form>
      <Social />
    </div>
  );
}
export default Contact;
