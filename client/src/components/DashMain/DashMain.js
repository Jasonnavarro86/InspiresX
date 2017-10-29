import React from 'react';
import { Link } from "react-router-dom";
import DashNavBar from "../DashNavBar";
import DashAdd from "../DashAdd";
import DashResources from "../DashResources";
import ProfilePhoto from '../ProfilePhoto';
import Modal from "../Modal";
import API from "../../utils/API";
import "./DashMain.css"
class DashNav extends React.Component{

  state ={
    currentPage: `${this.props.url}`,
    firstname: "",
    lastname: "",
    goals: [],
    img: "",
    email: "",
    btnClick: "",
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

           this.setState({ firstname: res.data.firstname, lastname: res.data.lastname, email: res.data.email, _id: res.data._id, btnClick: res.data.btnClick, update: res.data.update, date: res.data.date, img: res.data.img, goals: res.data.newGoal});
         
               }
           })
      .catch(err => console.log(err));
  }



handlePageChange = page => {
  this.setState({ currentPage: page });
};

renderPage = () => {
  if (this.state.currentPage === `${this.props.url}`) {
    return <div id="dashLand"><ProfilePhoto className="col"/> <div id="btnDiv" className="float-right"><DashAdd onClick={() => this.playme()}/> <DashResources/></div></div>;
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
console.log(this.state.goals);
     return(

<div id="DashNavMain">

  <DashNavBar url={this.props.url}/>
   <div id="mainDashBody" className="container">

          <h1 id="mainDashH1"className=""> {`${this.state.firstname}'s Current Goal's`}</h1>

          <hr></hr>

      {this.renderPage()}

      <Modal checkNewNote={this.checkNewNote} fbauth={this.state.fbauth}/>
  </div>


</div>


);
 }
}
export default DashNav;