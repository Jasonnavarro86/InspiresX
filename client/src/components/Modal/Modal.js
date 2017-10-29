import React from "react";
import API from "../../utils/API";
import "./Modal.css"




class Modal extends React.Component{


  submitValues =(e) =>{
    e.preventDefault()
    

    const newGoals = {
    title: document.getElementById("goalName").value,
    subject: document.getElementById("subject").value,
    body: document.getElementById("description").value,
    motivation: document.getElementById("motivation").value,
    fbauth: parseInt(this.props.fbauth),
    completed: false
    }

    API.saveNewGoal(newGoals)
    .then(res => this.props.checkNewNote(res.data.fbauth))
    .catch(err => console.log(err));
                      
  }

  render(){
    
    return(
<div id="myModal" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
<div className="modal-dialog modal-lg">
  <div id="mainModalDiv"className="modal-content jumbotron">
  <iframe  id="modalMovie" type="text/html" role="dialog" title="motivation" width="41%" height="15%" frameborder="0" allowfullscreen></iframe>
  
  <hr></hr>
  <div className="myForm  container">
  <h1>  Enter New Goal</h1>
 <form>
 <div className="form-group">
   <label for="goalName">Goal Name</label>
   <input className="form-control" id="goalName"  placeholder="" required/>
   
 </div>

 <div className="form-group">
 <label for="subject">Subject</label>
 <select className="form-control" id="subject">
   <option value=""></option>
   <option className="option" value="learning">LEARNING</option>
   <option className="option" value="self improvement">SELF IMPROVEMENT</option>
   <option className="option" value="sales">SALES</option>
   <option className="option" value="budgeting">BUDGETING</option>
   <option className="option" value="marketing">MARKETING</option>
 </select>
</div>

 <div className="form-group">
 <label for="motivation">Your Motivation</label>
 <input className="form-control" id="motivation"  placeholder=""/>
 
</div>
 
 
 
 <div className="form-group">
 <label for="exampleTextarea">Description</label>
 <textarea className="form-control" id="description" rows="3"></textarea>
 </div>
 
 
 
 <button id="submitBtn"type="submit" onClick={(e) => this.submitValues(e)} className="btn btn-primary" data-toggle="modal" data-target="#myModal" >Submit</button>
 </form>
 </div>
  </div>
</div>
</div>
    )
  }
}
export default Modal;