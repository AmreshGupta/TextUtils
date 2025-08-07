import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");
  const [translated, setTranslated] = useState("");

  const handleTranslate = async () => {
    if (!text.trim()) {
      setTranslated("Please enter some text");
      props.showAlert("Please enter some text to translate", "warning");
      return;
    } else {
      setTranslated(""); // Clear previous translation
      props.showAlert("Translating text...", "info");
    }

    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(
        text
      )}`
    );
    const data = await response.json();
    const translatedText = data[0].map((part) => part[0]).join(" ");
    setTranslated(translatedText);
  };
  const handleUpClick = () => {
    // console.log("uppercase was click" + text);
    if (!text.trim()) {
      props.showAlert("Please enter some text to convert", "warning");
      return;
    } else {
      props.showAlert("Converting to Uppercase...", "info");
      let newText = text.toUpperCase();
      setText(newText);
    }
    // let newText = text.toUpperCase();
    // setText(newText);
    // props.showAlert("Converted to Uppercase", "success");
    // // document.title = "TextUtils - Uppercase";
  };
  const handleLoClick = () => {
    if (!text.trim()) {
      props.showAlert("Please enter some text to convert", "warning");
      return;
    } else {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase", "success");
    }
  };
  const deleteAll = () => {
    let delet = "";
    setText(delet);
    props.showAlert("Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    // console.log(" on change");
    setText(event.target.value);
  };

  //changing translate

  //....
  return (
    <>
      <div className="container mt-2">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "#dfdddd",
              color: props.mode === "dark" ? "white" : "black",
            }}
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
        <button className="btn btn-primary mx-1 my-1" onClick={handleTranslate}>
          Translate in Hindi
        </button>
        <samp className="float-end">
          {text.split(" ").length - 1} words and {text.length} characters and{" "}
          {0.008 * (text.split(" ").length - 1)} Minutes to read
        </samp>
      </div>
      <div className="container my-3">
        {/* <h4> Your text summary </h4>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p> */}
        <h4>Preview</h4>
        <p>{text}</p>
        <h3>Hindi</h3>
        <p>{translated}</p>
      </div>
    </>
  );
}
