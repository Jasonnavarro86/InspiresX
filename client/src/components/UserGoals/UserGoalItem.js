import React from "react";
import "./UserGoals.css"


export const UserGoalItem = props => (
  <li className="list-group-item theLi">
    
      <div className="">
       
        <a href={`/dashboard/${props.fbauth}/goal/${props.uid}`} className="goalName ">{props.title}</a>
        
        
          
          <p className="goalMotivation">{props.motivation} </p>
         
          
      </div>

  </li>
);
