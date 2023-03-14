// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
const showAlert =(message,type)=>{
 setAlert({
  msg : message,
  type : type
 })
setTimeout(() => {
  setAlert(null)
}, 2000);

}

  const[mode,setMode]= useState('light');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
       document.body.style.backgroundColor ='#02345f';
       showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode Enabled","success");
    }

}

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3 ">
        
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About />}/> */}
          {/* <Route exact path="/home" element={ */}
          <TextForm showAlert={showAlert} heading="Enter the Text to analyze below" mode ={mode}/>
          {/* }/> */}
       
        {/* </Routes> */}
      </div>
      {/* </Router> */}
      
    </>
  );
}

export default App;