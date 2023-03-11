import React,{useState} from "react";

export default function TextForm(props) {
const handleOnChange=(event)=>{
  // console.log("On change");
  setText(event.target.value)
}
const handleUpClick=()=>{
  // console.log("Uppercase is clicked" +text);
let newText = text.toUpperCase();setText(newText);
}
  const [text,setText] =useState('Enter text here');
  // text="new text" // wrong way
//  setText("new text"); // correct way
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <div className="container text-center">
  <div className="row align-items-start">
    <div className="col-4">
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
    </div>
    <div className="col-4">
    <button className="btn btn-primary">Convert to LowerCase</button>
    </div>
    <div className="col-4">
    <button className="btn btn-primary">Convert to UpperCase</button>

    </div>
  </div>
</div>
      
    </div>
  );
}
