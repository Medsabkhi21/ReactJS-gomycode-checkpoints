import React from 'react';
import './App.css';
//import "./style.css";
import ProfileComponent from './profile/profileComponent';

import image from "./imageInSrc.png"


function App() {
  
  const profile={
    fullName: "",
    bio: "",
    profession:""
  }

  const imageStyle = {
  width: "20%",
  backgroundColor: "white",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  display:"block" ,
}
  
   
  function handleSubmit({fullName}){
    alert ('A profile was submitted: '+ fullName );
  }


return (  
<div>
 <form onSubmit={()=>{handleSubmit( profile.fullName)}}>
         
          <label>
            full name:
            <input name ="fullName" type="text" value={profile.fullName} onChange={(evt) => { profile.fullName = evt.target.value }}/>
          </label>
         
          <label>
            Bio:
            <input name="bio" type="text" value={profile.bio}  />
          </label>
         
          <label>
            Profession:
            <input name="profession" type="text" value={profile.profession} />
          </label>
         
         
          <input type="submit" value="Submit" />
         
  </form>
  <div>
  <ProfileComponent profile={profile}/>
  </div>

  <div class="container">
  <img style={imageStyle} src={image} alt="Avatar" class="image"/>
  </div>
</div>
 
  
 


    

)}

export default App;