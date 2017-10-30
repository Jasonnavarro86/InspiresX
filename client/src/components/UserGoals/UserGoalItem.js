import React from "react";
import "./UserGoals.css"


export const UserGoalItem = props => (
  <li className="list-group-item theLi">
    
      <div className="">
       
        <a href="" className="goalName ">{props.title}</a>
        
        
          
          <p className="goalMotivation">Motivation for this goal: {props.motivation} </p>
         
      
      </div>

  </li>
);
