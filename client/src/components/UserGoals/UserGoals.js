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
 
</div>
   )
 }
}

export default UserGoals;
