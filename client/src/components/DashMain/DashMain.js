import React from 'react';
import { Link } from "react-router-dom";
import DashNavBar from "../DashNavBar";
import DashAdd from "../DashAdd";
import DashResources from "../DashResources";
import DashGoalHistory from "../DashGoalHistory";
import ProfilePhoto from '../ProfilePhoto';
import Modal from "../Modal";
import { UserGoals, UserGoalItem } from "../UserGoals";
import Upload from "../ProfilePhotoUpload";
import API from "../../utils/API";

import "./DashMain.css"
class DashNav extends React.Component{


  state ={
    currentPage: `${this.props.url}`,
    firstname: "",
    lastname: "",
    goals: [],
    img:"http://hope4merton.com/wp-content/uploads/2015/12/profile-placeholder.gif",
    img2: `https:avatars1.githubusercontent.com/u/28733244?s=400&u=ebe2e31590e192c16a5ac393cff060f145d764e7&v=4`,
    email: "",
    date: "",
    update: "",
    _id:"",
    fbauth:this.props.uid

  }



componentDidMount() {

     API.findFbId(this.props.uid)
    .then(res => { 
      console.log("pop?", res.data);
       if(res.data == null)
         {
           window.location.href = "/" 
         }else{

           this.setState({ firstname: res.data.firstname, lastname: res.data.lastname, email: res.data.email, _id: res.data._id, btnClick: res.data.btnClick, update: res.data.update, date: res.data.date, goals: res.data.newGoal});
         
               }
           })
      .catch(err => console.log(err));
  }



  upload = () =>{
    const input = document.getElementById("photoFile");
    const fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function(event){
        var img = document.getElementById("ProfilePhoto");
        img.src = event.target.result;
        
        
    }
    document.getElementById("photoLoad").style.visibility = "hidden"; 
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
console.log(this.state.goals);
     return(

<div id="DashNavMain">

  <DashNavBar url={this.props.url}/>
   <div id="mainDashBody" className="container">

          <h1 id="mainDashH1"className=""> {`${this.state.firstname}'s Current Goal's`}</h1>

          <hr></hr>

          <div id="dashLand">
              <ProfilePhoto url={this.state.img} className="col"/>
              <Upload upload={this.upload}/>
                <div id="btnDiv" className="float-right">
                 <DashAdd onClick={() => this.playme()}/> 
                 <DashGoalHistory/>
                 <DashResources/>
                </div>
            
                  {!this.state.goals.length ?(
                     <h1 className="text-center">No Goals to Display</h1>
                     ):(<UserGoals> 
                         {this.state.goals.map( goal => {
                           return(
                       <UserGoalItem key={goal.title} fbauth={this.state.fbauth} title={goal.title} motivation={goal.motivation} uid={goal._id}/>        
                           )
                          }
                        )
                      }      
                     </UserGoals>
              )
            }     
          </div>
      <Modal checkNewNote={this.checkNewNote} fbauth={this.state.fbauth}/>
  </div>


</div>


);
 }
}
export default DashNav;