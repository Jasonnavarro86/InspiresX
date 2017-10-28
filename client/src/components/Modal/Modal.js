import React from "react";

import "./Modal.css"




const Modal = (props) =>



<div id="myModal" className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
<div className="modal-dialog modal-lg">
  <div className="modal-content">
  <div style={this.style1} className="myForm jumbotron container">
  <h1>  Enter New Goal</h1>
 <form>
 <div className="form-group">
   <label for="exampleInputEmail1">Goal </label>
   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="EX: Get My PHD"/>
   
 </div>
 
 
 
 <div className="form-group">
 <label for="exampleTextarea">Description</label>
 <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
 </div>
 
 
 
 <button type="submit" className="btn btn-primary">Submit</button>
 </form>
 </div>
  </div>
</div>
</div>



export default Modal;