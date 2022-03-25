import React from 'react';
//import './App.css';
import "./style.css";
import imageInSrc from "./imageInSrc.png"

const myName = "Mohamed Sabkhi";

function App() {
  return (
  <div style= {{border:"solid 1px black" , maxWidth:"100vw" }} > 
    
  <p className='title red'>{myName} </p>
  
   <p>
   <img src={imageInSrc} alt='src'/>
   </p>
   <p>
      <img src="/imageInPublic.jpg" style ={{width:"320", height:"240" }}/>
   </p>
   <p>
      <video src="/video.mp4" width="320" height="240"  controls="controls" autoplay="true" />
   </p> 
  
  </div>
     
)
}

export default App;