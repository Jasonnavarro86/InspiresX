import React from "react";
import "./GoalStatusModal.css"




class statusModal extends React.Component{

  render(){
    
    return(
       
      
  

<div className="modal fade " id="statusModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div id="mainModalthough" className="rounded container">

        <a  className="close"  href={`/dashboard/${this.props.fbauth}/goal/${this.props.url}`}>
            <span aria-hidden="true">&times;</span>
        </a>
        
   <h1 className="text-center h1ModalI" id="h1ModalI"> </h1>
    
      <iframe  id="statusMovie" className="col" type="text/html" role="dialog" title="motivation"  frameborder="0" allowfullscreen></iframe>
     
    <hr className="hr"></hr>

    <div id="statusVidDiv" className="container">
      <iframe id="statusiframe1" title="inspiresX" width="360" height="215" className="statusiframe" frameborder="0" allowfullscreen></iframe>
      <iframe id="statusiframe2" title="inspiresX" width="360" height="215" className="statusiframe"  frameborder="0" allowfullscreen></iframe>
      <iframe id="statusiframe3" title="inspiresX" width="360" height="215" className="statusiframe"  frameborder="0" allowfullscreen></iframe>
      <iframe id="statusiframe4" title="inspiresX" width="360" height="215" className="statusiframe last" frameborder="0" allowfullscreen></iframe>
      <a type="" className="btn btn-lg btnStatus"  href={`/dashboard/${this.props.fbauth}/goal/${this.props.url}`} >CLOSE</a>
    </div>
   
</div>
</div>

    )
  }
}
export default statusModal;