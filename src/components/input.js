import React, { useState } from "react";

export default function Input(props) {
  const [text, setText] = useState("");
  const trimmedText = text.trim();
  const wordCount = trimmedText === "" ? 0 : trimmedText.split(/\s+/).length;

  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const toUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("changed to UpperCase", "success");
  };
  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("changed to LowerCase", "success");
  };
  const capFistLetter = () => {
    let newText = "";
    text.split(" ").forEach((element, index) => {
      if (element) {
        newText = newText + element[0].toUpperCase() + element.slice(1);
        if (index !== text.split(" ").length - 1) {
          newText += " ";
        }
      }
    });
    setText(newText);
    props.showalert("First letter is changed to UpperCase", "success");
  };
  const clear = () => {
    let newText = "";
    setText(newText);
    props.showalert("Cleared", "success");
  };
  const copy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("copied to clipboard", "success");
  };
  const clearspaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showalert("Extra-spaces removed", "success");
  };

  return (
    <div className={`container text-${props.mode} mt-4` } >
      <h1 style={{color: props.color === "black" ? "white" : "black",}}>{props.heading}</h1>
      <div className={`mb-3 `}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter or Paste your text here:
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleonChange}
          style={{
            backgroundColor: props.color==='black'?'#0b0a0a94':'#9ff1ff47',
            color: props.color === "black" ? "white" : "black",
          }}
        >
          {" "}
        </textarea>
      </div>
      <button disabled={text.length===0} className="btn  btn-primary mx-2" onClick={toUpCase}>
        ToUpperCase
      </button>
      <button disabled={text.length===0} className="btn  btn-primary mx-2" onClick={toLowerCase}>
        {" "}
        ToLowerCase
      </button>
      <button disabled={text.length===0} className="btn  btn-primary mx-2" onClick={capFistLetter}>
        CapitaliseFirstLetter
      </button>
      <button disabled={text.length===0} className="btn  btn-primary mx-2" onClick={copy}>
        copy
      </button>
      <button disabled={text.length===0} className="btn  btn-primary mx-2" onClick={clearspaces}>
        clearExtraSpaces
      </button>
      <button disabled={text.length===0} className="btn  btn-danger mx-2" onClick={clear}>
        clear
      </button>
      <div className="counter my-3">
        <h1>Text-Summary</h1>
        <b>
          {wordCount} Words and {text.length} characters
        </b>
      </div>
      <div>
        <h2>Preview</h2>
        <p>{text ? text: 'Nothing To Preview' }</p>
      </div>
    </div>
  );
}
