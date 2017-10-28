import React from 'react';
import { Link } from "react-router-dom";
import UserGoals from "../UserGoals";
import DashLoad from "../DashLoad";
import ProfilePhoto from '../ProfilePhoto';
import Modal from "../Modal";
import API from "../../utils/API";
import "./DashNav.css"
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
    return <div id="dashLand"><ProfilePhoto className="col"/>  <DashLoad handlePageChange={this.handlePageChange} currentPage={this.state.currentPage} url={this.props.url}/></div>;
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
<nav className="navbar navbar-toggleable-md navbar-light bg-faded">

     <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

       <span className="navbar-toggler-icon"></span>

    </button>

      <a id="navBrand" className="navbar-brand ">InspiresX</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

           <ul className="navbar-nav mr-auto">
  
             <li className="nav-item active float-right">
               <Link to={this.props.url} className="btn col ">Home</Link>
             </li>
             <li className="nav-item active float-right">
             
               <Link to={this.props.url} className="btn col ">About Us</Link>
             </li>
             <li className="nav-item active float-right">
               <Link to={this.props.url} className="btn col ">Contact</Link>
             </li>
   
           </ul>
  
        </div>


  </nav>

   <div id="mainDashBody" className="container">

          <h1 className="display-4"> {`${this.state.firstname}X   Beyond Our Limits`}</h1>

          <hr></hr>

      {this.renderPage()}

  </div>

<Modal/>
</div>


);
 }
}
export default DashNav;