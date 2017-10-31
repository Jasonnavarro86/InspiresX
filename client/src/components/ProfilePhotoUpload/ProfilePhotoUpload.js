import React from "react";
import "./ProfilePhotoUpload.css";



class Upload extends React.Component { 
  
 
  render(){
    return (
    <form id="photoLoad"className="uploadForm float-left">
    <div className="form-group">
  
    <input type="file" className="form-control-file" id="photoFile" aria-describedby="fileHelp"/>
    <small id="fileHelp" className="form-text"></small>
  </div>
  <button type="submit" onClick={(e) =>{e.preventDefault(); this.props.upload()}} className="btn btn-sm btn-primary">Upload Photo</button>
  </form>
)
}
}

export default Upload;