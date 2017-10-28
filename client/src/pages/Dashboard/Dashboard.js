import React from "react";
import DashNav from '../../components/DashNav';


class Dashboard extends React.Component{

render(){return(<DashNav url={this.props.match.url} uid={this.props.match.params.name}/>) }

} 
export default Dashboard;