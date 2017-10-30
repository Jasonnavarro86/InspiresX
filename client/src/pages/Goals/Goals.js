import React from "react";
import GoalsMain from '../../components/GoalsMain';


class Goals extends React.Component{

render(){ return(<GoalsMain url={this.props.match.url} uid={this.props.match.params.id} fbauth={this.props.match.params.name}/>) }

} 
export default Goals;