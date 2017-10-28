import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import API from "../../utils/API";

class LoginFB extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

 
//FaceBook Response
  responseFacebook (response) {
    
    const splitName = response.name.split(" ");
    let first;
    let last;
    if(splitName.length === 2){
      first = splitName[0];
      last = splitName[1];
    }else if (splitName.length === 3){
      first = splitName[0];
      last = splitName[2];
    };
    API.findFbId(response.id)
    .then(res => {
      
      if(res.data == null){

        API.saveUser({
          fbauth: response.id,
          firstname: first,
          lastname: last,
          email: response.email,
        })
          .then(res1 =>  window.location.href = "/dashboard/"+res1.data.fbauth)
          .catch(err => console.log(err));

      }else{
        window.location.href = "/dashboard/"+res.data.fbauth;
      }
  })
      .catch(err => console.log(err));
   }
  
  

  render () {
    return (
     
     
        <FacebookLogin socialId="180836572473155"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Facebook"/>
   
    );
  }

}

export default LoginFB;