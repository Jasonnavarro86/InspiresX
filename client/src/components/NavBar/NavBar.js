import React from 'react';
import { Link } from 'react-router-dom';
import Login from "./GoogleOAuth"
import LoginFB from "./FaceBookOAuth"
class navBar extends React.Component{

  
    render(){

      return(

<div  className="" style={this.props.style4}>
    
   <div className="btn-group" role="group">

        <Link to=""  id="btnGroupDrop"  className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={this.props.style}>Log In</Link>

        <div style={this.props.style6} className="dropdown-menu" aria-labelledby="btnGroupDrop">

            <LoginFB to="" className="dropdown-item" href="">FaceBook</LoginFB>

             <Login className="dropdown-item" href="">Google</Login>
             <a className="dropdown-item" href="">GitHub</a>
             <a className="dropdown-item" href="">LinkedIn</a>

        </div>
    </div>

      <Link to="/about"  style={this.props.style} className="btn" >About Us <span className=""></span></Link>
      <Link to="contact"  style={this.props.style} className="btn" >Contact</Link>
</div>
)
    }
}
export default navBar;

