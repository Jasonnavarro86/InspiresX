import React from "react";
import "./GoalsForm.css";




const GoalsForm = (props) =>


<div className="GoalsFormDiv">
<div className="yarn">
<h3 className="motivationH3 text-center"> TODOs<hr/></h3>
</div>
<form id="goalForm">
<h1 className="display-6">Enter TODOs</h1>
<div className="form-group">
<label for="formGroupExampleInput2">Title</label>
<input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
</div>
<div className="form-group">
  <label for="formGroupExampleInput">Details</label>
  <textarea rows="3" className="form-control" id="formGroupExampleInput" placeholder=""/>
</div>

<button type="submit" className="btn btn-primary btn-sm submit">Submit</button>
</form>

  
</div>

export default GoalsForm;