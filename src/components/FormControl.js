import React, { useState } from "react";
import "./FormControl.css";

function FormControl() {
  // const [emailAddress, setEmailAddress] = useState("");
  const [text, setText] = useState("");

  const messageTyper = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Your Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          rows="10"
          onChange={messageTyper}
        ></textarea>
        <h6>Preview Of Mail</h6>
        <br />
        <p>{text}</p>
        <button type="button" className="btn btn-dark">
          &#128508; Send Message &#128508;
        </button>
      </div>
    </div>
  );
}

export default FormControl;
