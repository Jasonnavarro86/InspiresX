import React from 'react';
import { Link, Route } from "react-router-dom";
import UserGoals from "../UserGoals";


class DashNav extends React.Component{

 render() {
     return(

    
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    
<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<a className="navbar-brand" >InspiresX</a>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">

  
    <li className="nav-item active float-right">
    <Link to={`${this.props.url}/newGoal`} className="btn ">Add New Goal</Link>
    </li>
    <li className="nav-item active float-right">
    <Link to={`${this.props.url}/goalHistory`} className="btn ">Goal History</Link>
    </li>
   
  </ul>
  
</div>

<Route exact path={`${this.props.url}/newGoal`} component="UserGoals"/>
<Route exact path={`${this.props.url}/goalHistory`} component="UserGoals"/>
</nav>
);
 }
}
export default DashNav;