import React from 'react';
import "./UserGoalBtn.css"




const UserGoalBtn = ({onClick, id}) => (


    <div id="userGoalDiv">
        <button onClick={() => onClick(id, "quit", true)} className="btn btn-md  linkBtn"> Quit</button>

         <button  onClick={() => onClick(id, "feelquit", 1)} className="btn btn-md linkBtn"> Feel Like Quitting </button>

         <button  onClick={() => onClick(id, "helppush", 2)} className="btn btn-md  linkBtn "> Need Help Pushing Through</button>

        <button  onClick={() => onClick(id, "helplearn", 3)} className="btn btn-md linkBtn"> Need Help Learning</button>

        <button  onClick={() => onClick(id, "feelgood", 4)} className="btn btn-md  linkBtn "> Feel Good</button>

        <button  onClick={() => onClick(id, "feelgreat", 5)} className="btn btn-md  linkBtn"> Feel Great</button>

        <button  onClick={() => onClick(id, "completed", true)} className="btn btn-md  linkBtn"> Complete Goal !</button>
  
        
    </div>
);


export default UserGoalBtn;