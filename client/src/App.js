import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Goals from "./pages/Goals"
import About from "./pages/AboutUs"
import Contact from "./pages/Contact"
import "./App.css"


const App = () => (

<Router>
  <div id="AppMainDiv"> 
    
     <Route exact path="/" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/dashboard/:name" component={Dashboard} /> 
     <Route path="/dashboard/:name/goal/:id" component={Goals} />  
     
  </div>
</Router>

)

export default App;