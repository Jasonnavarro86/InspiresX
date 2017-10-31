import React from 'react';
import "./UserGoalBtn.css"
import { Link } from "react-router-dom";




const UserGoalBtn = ({onClick, id}) => (


    <div id="userGoalDiv">
        <button onClick={() => onClick(id, "quit")} className="btn btn-md  linkBtn"> Quit</button>

         <button  onClick={() => onClick(id, "feelquit")} className="btn btn-md linkBtn"> Feel Like Quitting </button>

        <button  onClick={() => onClick(id, "helplearn")} className="btn btn-md linkBtn"> Need Help Learning</button>

        <button  onClick={() => onClick(id, "helppush")} className="btn btn-md  linkBtn "> Need Help Pushing Through</button>

        <button  onClick={() => onClick(id, "feelgood")} className="btn btn-md  linkBtn "> Feel Good</button>

        <button  onClick={() => onClick(id, "feelgreat")} className="btn btn-md  linkBtn"> Feel Great</button>

        <button  onClick={() => onClick(id, "completed")} className="btn btn-md  linkBtn"> Complete Goal !</button>
  
        
    </div>
);


export default UserGoalBtn;