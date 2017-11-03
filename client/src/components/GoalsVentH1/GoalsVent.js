import React from "react";
import "./GoalsVent.css";
import API from "../../utils/API";



class GoalsVent extends React.Component{ 
  
  state = {
    vent: []
  }
 
  handleSubmit = () =>{
     
    const sendData  = {   
      note_id: parseInt(this.props.noteId),
      title: document.getElementById("ventTitle").value,
      body: document.getElementById("ventDetails").value
    }
    
 
    API.saveVent(sendData)
    .then(res => { const VentId = {
      noteId:this.props.noteId, _id :res.data._id
    };
     API.addVentToNote(VentId)
     .then(res1 => 
      API.populateVent(res1.data._id)
      .then(res2 => 
        this.setState({vent : res2.data.vent})
      ))})
    .catch(err => console.log(err))
  }

  componentDidMount(){
    API.populateVent(this.props.noteId)
    .then(res2 => 
      this.setState({vent : res2.data.vent}))
  }

  ventModal = () => {
    
  }

 render(){
console.log(this.state);
        return(
<div className="GoalsVentDiv">
<h3 className="motivation5 text-center"> TODOs <hr/></h3>
<div className={"mapBtnDiv"}>

{this.state.vent.map(item => {return (
  <div className="btnDiv" >
  <button className={"mapBtn btn btn-md"} onClick={() => this.ventModal()}> {item.title}</button>
  </div>
)})}
</div>
<form id="goalVent">
<h1 className="display-6 text-center">Enter TODOs</h1>
<div className="form-group">
<label for="formGroupExampleInput2">Title</label>
<input type="text" className="form-control" id="ventTitle" placeholder=""/>
</div>
<div className="form-group">
  <label for="formGroupExampleInput">Details</label>
  <textarea rows="3" className="form-control" id="ventDetails" placeholder=""/>
</div>

<button type="submit" onClick={(e) => {e.preventDefault(); this.handleSubmit()}} className="btn btn-primary btn-sm submit">Submit</button>
</form> 
</div>
        )

 }
}
export default GoalsVent;