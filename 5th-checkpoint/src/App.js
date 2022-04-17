import React, {Component,useState } from "react"
import {ProfileComponent} from "./Components/ProfileComponent"
class App extends Component {
 
  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
  }
  

    state = {count:0,isShown: false, person:{fullName:"test",bio:"test", imgSrc:"test", profession:"test"}}

    showHandler=()=> {
      this.setState({isShown:!this.state.isShown})
    }
      
  render() { 
    return(
<>
<ProfileComponent  isShown={this.state.isShown}  person={this.state.person} showHandler={this.showHandler}/>
  
<h1>The component has been rendered for {this.state.count} seconds</h1></>
    )
  }
  }
  
export default App;