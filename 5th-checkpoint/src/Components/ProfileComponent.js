import React,{useState } from 'react';

export const ProfileComponent=(props)=>{





    return (
    <div>
      <button onClick={()=>props.showHandler()}>
    
      profile
      </button>

      {props.isShown? (
                
                <>
                 <h1>{props.person.fullName}</h1>
                <h1>{props.bio}</h1>
                <h1>{props.person.imgSrc}</h1>
                <h1>{props.person.profession}</h1></>
              ):  <h1>Profile is hidden</h1>}
    
    </div>
  );
}

