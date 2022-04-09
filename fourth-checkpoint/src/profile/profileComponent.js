
import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';



export default function ProfileComponent({profile}){
const styleObject = {color:'blue' , textAlign : 'center'}
  /*

  ProfileComponent.defaultProps ={
    fullName: "mch ferghin",
    bio: "mch ferghin",
    profession:"mch ferghin"
   }
*/
  /*ProfileComponent.prototype = {
    profile : ProtoTypes.Object
  }*/

    return (
      <div style={styleObject}>
        The Profile of the person is:
{profile.fullName}
{profile.bio}
{profile.profession}
      </div>
              );
    
   
            } 