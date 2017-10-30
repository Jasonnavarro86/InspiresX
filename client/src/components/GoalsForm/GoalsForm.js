import React from "react";
import "./GoalsForm.css";




const GoalsForm = (props) =>




<form>
<div className="form-group">
<label for="formGroupExampleInput2">Type Of Update</label>
<input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
</div>
<div className="form-group">
  <label for="formGroupExampleInput">Update</label>
  <textarea rows="3" className="form-control" id="formGroupExampleInput" placeholder=""/>
</div>

<button type="submit" className="btn btn-primary">Submit</button>
</form>

  


export default GoalsForm;