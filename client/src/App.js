import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import About from "./pages/AboutUs"
import Contact from "./pages/Contact"
import "./App.css"


const App = () => (

<Router>
  <div id="AppMainDiv"> 
    
     <Route exact path="/" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/contact" component={Contact}/>
     <Route path="/dashboard/:name" component={Dashboard} />  
     
  </div>
</Router>

)

export default App;