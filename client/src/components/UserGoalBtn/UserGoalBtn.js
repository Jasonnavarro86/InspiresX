import React from 'react';
import "./UserGoalBtn.css"




const UserGoalBtn = ({onClick, id, playmeStatus}) => (


    <div id="userGoalDiv">
    <h2 className="GoalBtnDiv"> Choose Your Current Status</h2>
        <button onClick={() => onClick(id, "quit", true)} id="quitBtn" className="btn btn-md  linkBtn"> Quit</button>

         <button  onClick={() =>{ onClick(id, "feelquit", 1); playmeStatus()} } className="btn btn-md linkBtn" data-toggle="modal" data-target="#statusModal"> I Feel Hopeless </button>

         <button  onClick={() => {onClick(id, "helppush", 2)}} className="btn btn-md  linkBtn "> I Need Help Pushing Through</button>

        <button  onClick={() => {onClick(id, "helplearn", 3)}} className="btn btn-md linkBtn"> I Want Motivation </button>

        <button  onClick={() => {onClick(id, "feelgood", 4)}} className="btn btn-md  linkBtn "> I Feel Good </button>

        <button  onClick={() => {onClick(id, "feelgreat", 5)}} className="btn btn-md  linkBtn"> I Feel Great</button>

        <button  onClick={() => {onClick(id, "completed", true)}} id="completeBtn" className="btn btn-md  linkBtn"> Complete Goal !</button>
  
        
    </div>
);


export default UserGoalBtn;