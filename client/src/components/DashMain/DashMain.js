import React from 'react';
import { Link } from "react-router-dom";
import UserGoals from "../UserGoals";
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
    body: "", 
    title: "",
    img: "",
    email: "",
    btnClick: "",
    date: "",
    update: "",
    _id:""
  }

componentDidMount() {

     API.findFbId(this.props.uid)
    .then(res => { 

       if(res.data == null)
         {
           window.location.href = "/" 
         }else{

           this.setState({ firstname: res.data.firstname, lastname: res.data.lastname, email: res.data.email, _id: res.data._id, btnClick: res.data.btnClick, update: res.data.update, date: res.data.date, img: res.data.img})
           
               }

           })
      .catch(err => console.log(err));
  }



handlePageChange = page => {
  this.setState({ currentPage: page });
};

renderPage = () => {
  if (this.state.currentPage === `${this.props.url}`) {
    return <div id="dashLand"><ProfilePhoto className="col"/> <div id="btnDiv" className="float-right"><DashAdd/> <DashResources/></div></div>;
  } else if (this.state.currentPage === `${this.props.url}/addGoal`) {
    return  <div id="dashLand" ><UserGoals handlePageChange={this.handlePageChange} currentPage={this.state.currentPage} url={this.props.url}/></div>;
  } else if (this.state.currentPage === `${this.props.url}/goalHistory`) {
    return ;
  } else {
    return ;
  }
}

 render() {

     return(

<div id="DashNavMain">

  <DashNavBar url={this.props.url}/>
   <div id="mainDashBody" className="container">

          <h1 id="mainDashH1"className=""> {`${this.state.firstname}X Current Goal's`}</h1>

          <hr></hr>

      {this.renderPage()}

  </div>

<Modal/>
</div>


);
 }
}
export default DashNav;