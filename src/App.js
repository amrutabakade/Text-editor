import './App.css';
import About from './component/About';
//import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 const [mode,setmode]= useState('light')
// const [text, setext]= useState("light mode")
  const Togglemode=()=>
  {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor = "grey";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
     <>
      {/* <Navbar prop1="TextEditor" mode={mode} Togglemode={Togglemode}/>
      <Alert alert={"this is alert"}></Alert>
      <div className='container'>
          <TextForm heading="Enter your reviews" mode={mode}/>
      </div> */}
      <Router>
      <Navbar prop1="TextEditor" mode={mode} Togglemode={Togglemode}/>
      <Routes>
      <Route exact path='/' element={ <TextForm heading="Enter your reviews" mode={mode}/>} />
      <Route exact path='/about' element={<About/>} />
    
      </Routes>
      </Router>

    </>
  );
}


export default App;
