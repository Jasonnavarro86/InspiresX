import React from "react";
import API from "../../utils/API";
class UserGoals extends React.Component{
        
        style1={
               backgroundColor: "Silver" ,
               marginTop : "5%"     
        }

        state = {
          
          name: "",
          email: "",
     
        };


        loadUser = () => {
          API.getUser()
            .then(res =>
              this.setState({ name: res.data, email: "" })
            )
            .catch(err => console.log(err));
        };

        handleInputChange = event => {
          const { name, value } = event.target;
          this.setState({
            [name]: value
          });
        };


        handleFormSubmit = event => {
          event.preventDefault();
          if (this.state.name && this.state.name) {
            API.saveUser({
              name: this.state.name,
              email: this.state.email,
            })
              .then(res => this.loadUser())
              .catch(err => console.log(err));
          }
        };
        
        
    render(){

        return(
<div>
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
   )
 }
}

export default UserGoals;
