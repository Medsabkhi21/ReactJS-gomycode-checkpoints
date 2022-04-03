import './App.css';
import React from "react"
import { Adress } from './Component/Profile/Adress';
import { FullName } from './Component/Profile/FullName';
import { ProfilePhoto } from './Component/Profile/ProfilePhoto';


function App() {
    return (
      <React.Fragment>
       <ProfilePhoto/>
       <FullName/>
       <Adress/>
      </React.Fragment>
    );

}

export default App;
