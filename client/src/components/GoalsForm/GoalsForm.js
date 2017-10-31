import React from "react";
import "./GoalsForm.css";




const GoalsForm = (props) =>




<form id="goalForm">
<h1 className="display-6">Enter New Updates</h1>
<div className="form-group">
<label for="formGroupExampleInput2">Update Title</label>
<input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
</div>
<div className="form-group">
  <label for="formGroupExampleInput">Update Body</label>
  <textarea rows="3" className="form-control" id="formGroupExampleInput" placeholder=""/>
</div>

<button type="submit" className="btn btn-primary btn-sm submit">Submit</button>
</form>

  


export default GoalsForm;