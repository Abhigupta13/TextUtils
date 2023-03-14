import React,{useState} from "react";

export default function TextForm(props) {
const handleOnChange=(event)=>{
  // console.log("On change");
  setText(event.target.value)
}
const handleUpClick=()=>{
  // console.log("Uppercase is clicked" +text);
let newText = text.toUpperCase();
setText(newText);
props.showAlert("Converted to UpperCase!","success")
}
const handleLowClick=()=>{
 
let newText = text.toLowerCase();
setText(newText);
props.showAlert("Converted to LowerCase!","success")
}
const handleClearClick=()=>{
 
let newText = '';
setText(newText);
props.showAlert("Text cleared!","success")
}

const handleCopy =()=>{
  // console.log("Copy is clicked");
let copyText =document.getElementById("myBox");
copyText.select();
navigator.clipboard.writeText(copyText.value);
props.showAlert("Text copied to clipboard!","success")
}

const handleExtraSpaces =()=>{
  // console.log("Extra spaces is clicked");
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed extra spaces","success")
}


const handleCapClick=()=>{
  
let lower = text.toLowerCase();
let newText =text.charAt(0).toUpperCase() +lower.slice(1);
setText(newText);
props.showAlert("Capitalize first letter!","success")
}
  const [text,setText] =useState('');
  // text="new text" // wrong way
//  setText("new text"); // correct way

const countWord = (str = '') => {
  let count =0;

  for(let i = 0;i < str.length; i++){  
    if(count ===0) count=1;
    else if(str[i] === ' ' && str[i+1]!==' ' && str[i+1]!==null)
             { count++;} 
  }
     return count;
};
  return (
    <>
    <div className="container " style={{color: props.mode === 'dark'? 'white': 'black'}}>
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'? '#02345f': 'white',color: props.mode === 'dark'? 'white': 'black'}} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter Text Here"></textarea>
      </div>
      <div className="container text-center">
  {/* <div className="row align-items-start">
    <div className="col-2 mx-1">
      <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
    </div>
    <div className="col-2 mx-1">
    <button className="btn btn-primary"  onClick={handleLowClick} >Convert to LowerCase</button>
    
    </div>
    <div className="col-2 mx-1">
    <button className="btn btn-primary" onClick={handleCapClick}>Capitalize The sentence</button>

    </div>
    <div className="col-2">
    <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="col-2">
    <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="col-2 mx-1">
    <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
  
  </div> */}
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-1"  onClick={handleLowClick} >Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCapClick}>Capitalize The sentence</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

</div>
      
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white': 'black'}}>
      <h1>Your Text Summary</h1>
      <p>{countWord(text)} words , {text.length} characters</p>
      <p>{0.008*text.split(' ').length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
