import React from "react";
import DashMain from '../../components/DashMain';


class Dashboard extends React.Component{

render(){return(<DashMain url={this.props.match.url} uid={this.props.match.params.name}/>) }

} 
export default Dashboard;