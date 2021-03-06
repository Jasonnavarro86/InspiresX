import React from "react";
import { Link } from "react-router-dom";
import "./DashNavBar.css"




const DashNavBar = (props) =>




<nav id="nav" className="navbar navbar-toggleable-md navbar-light bg-faded">

     <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

       <span className="navbar-toggler-icon"></span>

    </button>

      <a id="navBrand" className="navbar-brand  ">InspiresX</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

           <ul className="navbar-nav mr-auto">
  
             <li className="nav-item active float-right">
               <Link to="/" className="btn col linkCol">Home</Link>
             </li>
             <li className="nav-item active float-right">
             
               <Link to={props.url} className="btn col linkCol">About Us</Link>
             </li>
             <li className="nav-item active float-right">
               <Link to={props.url} className="btn col linkCol">Contact</Link>
             </li>
   
           </ul>
  
        </div>


  </nav>
  
  


export default DashNavBar;


