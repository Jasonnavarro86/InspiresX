import React from "react";
import { Link, Route } from "react-router-dom";
import ProfilePhoto from '../../components/ProfilePhoto';
import DashNav from '../../components/DashNav';
class Dashboard extends React.Component{



render(){
 
   return(

    
  <div>

    <DashNav url={this.props.match.url}/>

    <ProfilePhoto/>
    
  </div>
 
  )
 }
} 
export default Dashboard;