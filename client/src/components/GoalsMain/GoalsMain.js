import React from 'react';
import { Link } from "react-router-dom";
import API from "../../utils/API";
import DashNavBar from "../DashNavBar";
import GoalHomeBtn from "../GoalHomeBtn";
import UserGoalBtn from "../UserGoalBtn";
import GoalsForm from "../GoalsForm";
import "./GoalsMain.css"
class GoalsMain extends React.Component{
  
  state ={
    currentPage: this.props.url,
    firstname: "",
    btnClick: "",
    date: "",
    goals:[],
    update: "",
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


handlePageChange = page => {
  this.setState({ currentPage: page });
};

renderPage = () => {
  if (this.state.currentPage === `${this.props.url}`) {
    return <div id="dashLand"></div>;
  } else if (this.state.currentPage === `${this.props.url}/goalHistory`) {
    return ;
  } else {
    return ;
  }
}

 playme = () => {
  document.getElementById("modalMovie").src = 'https://www.youtube.com/embed/fviFNrWKzZ8?autoplay=1&disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0';
  }

  checkNewNote = (fbauth) =>{
    API.findFbId(fbauth)
    .then(res => { 
      
       this.setState({ goals: res.data.newGoal});
      
          })
      .catch(err => console.log(err));
  }



 render() {
console.log(this.state);
     return(

<div id="DashNavMain">

  <DashNavBar url={this.props.url}/>
     {this.state.goals.map(id => {
       if(id._id === this.state._id){
        return(
                
          <div id="mainDashBody" className="container">
          <GoalHomeBtn fbauth={this.state.fbauth}/> 
            <h1 id="mainDashH1" className="mainDashH1"> {id.title} <em className="mute">{id.subject}</em></h1>
            
              <hr></hr>
            
               <div id="dashLand">
                 <div id="btnDiv" className="">
                 <UserGoalBtn/>
                 </div>


                 <GoalsForm/>
              


            
               </div>
               <hr></hr> <h1 className="mainDashH1"> {id.subject}</h1>
          </div>)
            }
        
        
        })}
</div>


);
 }
}
export default GoalsMain;