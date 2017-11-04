import React from 'react';
import API from "../../utils/API";
import DashNavBar from "../DashNavBar";
import GoalHomeBtn from "../GoalHomeBtn";
import UserGoalBtn from "../UserGoalBtn";
import GoalsVent from "../GoalsVentH1";
import Chart from "../GoalCharts";
import GoalMotivationVideos from "../GoalMotivation";
import StatusModal from "../GoalStatusModal";

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
    good:["3ev7GXzFTPg","cZjtRQMEOmI","GBz-pwTyxtA","H_e7rsz8ud0","lsSC2vx7zFQ"],
    great:["GdmMkpm2M","Co6eDUAi2OQ","liiuDG9MM4M","QygpaIJclm4","EakDp68sgvM"],
    motivationvid:["StTQzAE3orI","0VHzQO_yWlI","RiVkYo7ci7g","KseJfS6tUPw","aoLYroQfCY4"],
    hopeless:["U6jRWI8_kXk","-moW9jvvMr4","QS2vv72R2XI","AVvk9-mslx4", "ocrjltwc_Fs"],
    pushing:["lgS0JG2cgWU","Q5jiifErFEE","YPwA_GbEIG","nShlloNgM2E","-bJmRoPb7uM"],
    _id:this.props.uid,
    fbauth:this.props.fbauth,
  
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

playmeStatus = (btnName) => {

  if(btnName == "hopeless"){
 console.log(this.state.hopeless )
  }
  switch (btnName) {
    case "hopeless":
    document.getElementById("statusMovie").src = `https://www.youtube.com/embed/${this.state.hopeless[0]}?autoplay=1&disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe1").src = `https://www.youtube.com/embed/${this.state.hopeless[1]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe2").src = `https://www.youtube.com/embed/${this.state.hopeless[2]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe3").src = `https://www.youtube.com/embed/${this.state.hopeless[3]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe4").src = `https://www.youtube.com/embed/${this.state.hopeless[4]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("h1ModalI").innerHTML = `“God grant me the courage not to give up what I think is right even though I think it is hopeless.” Chester W. Nimitz`;
    break;

    case "pushing": 
    document.getElementById("statusMovie").src = `https://www.youtube.com/embed/${this.state.pushing[0]}?autoplay=1&disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe1").src = `https://www.youtube.com/embed/${this.state.pushing[1]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe2").src = `https://www.youtube.com/embed/${this.state.pushing[2]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe3").src = `https://www.youtube.com/embed/${this.state.pushing[3]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe4").src = `https://www.youtube.com/embed/${this.state.pushing[4]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("h1ModalI").innerHTML = `“You just can’t beat the person who never gives up.” —Babe Ruth`;
    break;
    
    case "motivationvid": 
    document.getElementById("statusMovie").src = `https://www.youtube.com/embed/${this.state.motivationvid[0]}?autoplay=1&disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe1").src = `https://www.youtube.com/embed/${this.state.motivationvid[1]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe2").src = `https://www.youtube.com/embed/${this.state.motivationvid[2]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe3").src = `https://www.youtube.com/embed/${this.state.motivationvid[3]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe4").src = `https://www.youtube.com/embed/${this.state.motivationvid[4]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("h1ModalI").innerHTML = ` “The best preparation for tomorrow is doing your best today.” H. Jackson Brown, Jr.`;
    
    break;
    case "good": 
    document.getElementById("statusMovie").src = `https://www.youtube.com/embed/${this.state.good[0]}?autoplay=1&disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe1").src = `https://www.youtube.com/embed/${this.state.good[1]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe2").src = `https://www.youtube.com/embed/${this.state.good[2]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe3").src = `https://www.youtube.com/embed/${this.state.good[3]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe4").src = `https://www.youtube.com/embed/${this.state.good[4]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("h1ModalI").innerHTML = `“The future belongs to those who believe in the beauty of their dreams.” —Eleanor Roosevelt`;
    break;
    case "great":
    document.getElementById("statusMovie").src = `https://www.youtube.com/embed/${this.state.great[0]}?autoplay=1&disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe1").src = `https://www.youtube.com/embed/${this.state.great[1]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe2").src = `https://www.youtube.com/embed/${this.state.great[2]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe3").src = `https://www.youtube.com/embed/${this.state.great[3]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`;
    document.getElementById("statusiframe4").src = `https://www.youtube.com/embed/${this.state.great[4]}?disablekb=1&showinfo=0&iv_load_policy=3&modestbranding=1&controls=0`; 
    document.getElementById("h1ModalI").innerHTML = ` “When we can't dream any longer we die.” ― Emma Goldman`;
    break;
   
    default:
      break;
  }
 
 
}
stopmeStatus = () => {
    document.getElementById("statusMovie").src = '';
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
console.log(this.state);
     return(

<div id="DashNavMain">

  <DashNavBar url={this.props.url}/>
  
     {this.state.goals.map(id => {
       if(id._id === this.state._id){
         
        return(               
          <div id="mainDashBody" className="container">
          <StatusModal url={id._id} fbauth={id.fbauth}/>
          <GoalHomeBtn fbauth={this.state.fbauth}/> 
            <h1 id="mainGoalhH1" className="mainDashH1"> {id.title} <em className="mute">{id.subject}</em></h1>
            
              <hr></hr>
            
               <div id="dashLand">
               
                 <div id="btnDiv" className="">
                 
                  <UserGoalBtn playmeStatus={this.playmeStatus} id={id._id} onClick={this.log}/>
                 </div>

                    <Chart chartValues={id.chartValues} chartLabel={id.chartLabels} label={id.title} date1={id.date} date2={id.update}/>
                    
                    <h3 className="motivation4"><strong> Motivation </strong> <hr/></h3> <br/>
                    <div id="h3Div">
                     <h3 className="motivationH2 "><br/><em>{id.motivation}</em></h3>
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