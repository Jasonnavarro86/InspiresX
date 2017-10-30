import React from 'react';
import "./UserGoalBtn.css"
import { Link } from "react-router-dom";




const UserGoalBtn = (props) => (


    <div id="userGoalDiv">
        <Link to={`${props.url}/`} className="btn btn-md  linkBtn"> Quit</Link>

         <Link to={`${props.url}/ `} className="btn btn-md linkBtn"> Feel Like Quitting </Link>

        <Link to={`${props.url}/`} className="btn btn-md linkBtn"> Need Help Learning</Link>

        <Link to={`${props.url}/`} className="btn btn-md  linkBtn "> Need Help Pushing Through</Link>

        <Link to={`${props.url}/`} className="btn btn-md  linkBtn "> Feel Good</Link>

        <Link to={`${props.url}/`} className="btn btn-md  linkBtn"> Feel Great</Link>

        <Link to={`${props.url}/`} className="btn btn-md  linkBtn"> Complete Goal !</Link>
  
        
    </div>
);


export default UserGoalBtn;