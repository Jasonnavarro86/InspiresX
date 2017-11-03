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
  <button className={"mapBtn btn btn-md"} onClick={() => this.ventModal()} data-title={item.title} data-toggle="modal" data-target={`#${item._id}`}> {item.title}</button>
  </div>
  
 
)})}
</div>
<form id="goalVent">
<h1 className="display-6 text-center">Enter TODOs</h1>
<div className="form-group">
<label for="formGroupExampleInput2">{}</label>
<input type="text" className="form-control" id="ventTitle" placeholder=""/>
</div>
<div className="form-group">
  <label for="formGroupExampleInput">Details</label>
  <textarea rows="3" className="form-control" id="ventDetails" placeholder=""/>
</div>

<button type="submit" onClick={(e) => {e.preventDefault(); this.handleSubmit()}} className="btn btn-primary btn-sm submit">Submit</button>
</form> 
{this.state.vent.map(item => {return (
<div className="modal fade modalVent" id={item._id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h3 className="modal-title" id="exampleModalLabel">{item.title}</h3>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      {item.body}
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
      <button type="button" className="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>
)})}
</div>
        )

 }
}
export default GoalsVent;