import React, { Component }from 'react';
import { Link } from "react-router-dom";
import IFrame from '../../components/HomeIFrame';
import NavBar from "../../components/NavBar"


class Home extends Component{ 


    style = {
        position:"relative",
        
    }

    style2 = {
        position:"absolute",
        top: "1em",
        left:"1em",
        color: "white",
        fontSize: "25px"  
    }

    style3 = {
        margin: "15px",
        color: "white",
        backgroundColor: "none",
        border: "2px solid silver"  
    }

    style4 = {
        position:"absolute",
        top: "40%",
        right:"37%",
        color: "white",
        backgroundColor: "none",
    }

    style5 = {
        position:"absolute",
        top: "30%",
        right:"30%",
        color: "white",
        backgroundColor: "none",
    }

    style6 = {
        
        backgroundColor: "",
        opacity:"0.7",
        width: "2em",
        color: "white"

    }

    

    
render()
        {   
    
    return (
     
        <div className="" style={this.style}>

          
             <IFrame/>

             <NavBar style={this.style3} style4={this.style4} style6={this.style6}/>

             <h1 style={this.style5}>Be Inspired. Reach New Limits.</h1>

             <Link to="/" style={this.style2} className="" > InspiresX </Link>
 
           
         
     </div>

           );

        }

}

export default Home;