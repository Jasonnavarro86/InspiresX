import React from 'react';
import API from "../../utils/API";
import DashNavBar from "../DashNavBar";
import GoalHomeBtn from "../GoalHomeBtn";
import UserGoalBtn from "../UserGoalBtn";
import GoalsVent from "../GoalsVentH1";
import Chart from "../GoalCharts";
import GoalMotivationVideos from "../GoalMotivation";

import "./GoalsMain.css"

class GoalsMain extends React.Component{
  
  state ={
    currentPage: this.props.url,
    firstname: "",
    btnClick: "",
    date: "",
    goals:[],
    update: "",
    chartVals:[],
    chartKey: [],
    _id:this.props.uid,
    fbauth:this.props.fbauth
  }

componentDidMount() {

     API.findFbId(this.props.fbauth)
    .then(res => { 
      console.log("pop?", res.data);
       if(res.data == null)
         {
           window.location.href = "/" 
         }else{
           this.setState({ firstname: res.data.firstname,  btnClick: res.data.btnClick, update: res.data.update, date: res.data.date, goals: res.data.newGoal});
              }
           })
      .catch(err => console.log(err));
  }

playme = () => {
  document.getElementById("modalMovie").src = 'https://www.youtube.com/embed/fviFNrWKzZ8?autoplay=1&disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0';
  }

checkNewNote = (fbauth) =>{
    API.findFbId(fbauth)
       .then(res =>{    
   this.setState({ goals: res.data.newGoal});      
                   })
    .catch(err => console.log(err));
  }

log = (id, action, val) => {
  const update = {
      key: action,
      _id: id,
      val: val,
      update: Date.now()
  }
  
  API.updateUserGoal(update)
     .then(res => console.log(res.data))
     .catch(err => console.log(err))
};

 render() {
console.log(this.state.goals);
     return(

<div id="DashNavMain">

  <DashNavBar url={this.props.url}/>
     {this.state.goals.map(id => {
       if(id._id === this.state._id){
         
        return(               
          <div id="mainDashBody" className="container">
          <GoalHomeBtn fbauth={this.state.fbauth}/> 
            <h1 id="mainGoalhH1" className="mainDashH1"> {id.title} <em className="mute">{id.subject}</em></h1>
            
              <hr></hr>
            
               <div id="dashLand">
               
                 <div id="btnDiv" className="">
                 
                  <UserGoalBtn id={id._id} onClick={this.log}/>
                 </div>

                    <Chart chartValues={id.chartValues} chartLabel={id.chartLabels} label={id.title} date1={id.date} date2={id.update}/>
                    
                    <h3 className="motivation4"><strong> Motivation </strong> <hr/></h3> <br/>
                    <div id="h3Div">
                     <h3 className="motivationH2 "><br/>{id.motivation}</h3>
                    </div>

                  <GoalsVent vent={id} noteId={id._id}/>
                  <GoalMotivationVideos/>
               </div>
              
          </div>)
            }
        
        
        })}
</div>


);
 }
}
export default GoalsMain;