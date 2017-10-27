import React, { Component } from 'react';

class IFrame extends Component{ 

style = {
    opacity: 0.7,
    backgroundColor: "white",
    zIndex:"-99"
  }

 render(){

       return(

            <iframe  style={this.style}  id="ytplayer" type="text/html" title="happy people" width="100%" height="715" src="https://www.youtube.com/embed/tE3Fp8C_ufg?&loop=1&autoplay=1&disablekb=1&loop=1&showinfo=0&iv_load_policy=3&start=15&modestbranding=1&controls=0&playlist=tE3Fp8C_ufg" frameborder="0" allowfullscreen="true"></iframe>

             );                                                                    
          }

}
export default IFrame;