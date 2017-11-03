import React from "react";
import "./GoalStatusModal.css"




class statusModal extends React.Component{


  submitValues =(e) =>{
    e.preventDefault()
    
  }


 

  render(){
    
    return(
       


<div className="modal fade " id="statusModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div id="mainModalthough" className="rounded container">

        <a  className="close"  href={`/dashboard/${this.props.fbauth}/goal/${this.props.url}`}>
            <span aria-hidden="true">&times;</span>
        </a>
        
   <h1 className="text-center h1ModalI">“Character consists of what you do on the third and fourth tries.” ―James A. Michener </h1>
    
      <iframe  id="statusMovie" className="col" type="text/html" role="dialog" title="motivation"  frameborder="0" allowfullscreen></iframe>
     
    <hr className="hr"></hr>

    <div id="statusVidDiv" className="container">
    <iframe title="inspiresX" width="360" height="215" className="statusiframe" src="https://www.youtube.com/embed/7ClRv7GkhGc?showinfo=0&iv_load_policy=3&modestbranding=1&controls=0" frameborder="0" allowfullscreen></iframe>
    <iframe title="inspiresX" width="360" height="215" className="statusiframe" src="https://www.youtube.com/embed/Eu_dUxTg33I?showinfo=0&iv_load_policy=3&modestbranding=1&controls=0" frameborder="0" allowfullscreen></iframe>
    <iframe title="inspiresX" width="360" height="215" className="statusiframe" src="https://www.youtube.com/embed/xp2qjshr-r4?showinfo=0&iv_load_policy=3&modestbranding=1&controls=0" frameborder="0" allowfullscreen></iframe>
    <iframe title="inspiresX" width="360" height="215" className="statusiframe last" src="https://www.youtube.com/embed/2aXQTmxMNYY?showinfo=0&iv_load_policy=3&modestbranding=1&controls=0" frameborder="0" allowfullscreen></iframe>
    <a type="" className="btn btn-lg btnStatus"  href={`/dashboard/${this.props.fbauth}/goal/${this.props.url}`} >CLOSE</a>
    </div>
   
</div>
</div>

    )
  }
}
export default statusModal;