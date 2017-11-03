import React from "react";
import { Link } from "react-router-dom";
import "./GoalHomeBtn.css"




const GoalHomeBtn = (props) =>




 
  <Link id="goalHomeBtn" to={`/dashboard/${props.fbauth}`} className="btn btn-sm btn-light float-right">All Current Goal's </Link>
  


export default GoalHomeBtn;