import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");
  const handleUpClick = () => {
    // console.log("uppercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const deleteAll = () => {
    let delet = "";
    setText(delet);
  };
  const handleOnChange = (event) => {
    // console.log(" on change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={deleteAll}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h4> Your text summary </h4>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
