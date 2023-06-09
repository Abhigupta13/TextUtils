import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    if (text !== text.toUpperCase()) {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase!", "success");
    } else {
      props.showAlert("Already in UpperCase!", "info");
    }
  };
  const handleLowClick = () => {
    if (text !== text.toLowerCase()) {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase!", "success");
    } else {
      props.showAlert("Already in LowerCase!", "info");
    }
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };

  const handleCapClick = () => {
    if (text === "") {
    } else if (text.charAt(0) === text.charAt(0).toUpperCase()) {
      props.showAlert("Already Capitalize!", "info");
    } else {
      let lower = text.toLowerCase();
      let newText = text.charAt(0).toUpperCase() + lower.slice(1);
      setText(newText);
      props.showAlert("Capitalize first letter!", "success");
    }
  };
  const [text, setText] = useState("");
  // text="new text" // wrong way
  //  setText("new text"); // correct way
  return (
    <>
      <div
        className="container mt-5 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#02345f" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter Text Here"
          ></textarea>
        </div>
        <div className="container text-center">
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to UpperCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowClick}
          >
            Convert to LowerCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCapClick}
          >
            Capitalize The sentence
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
