import React from "react";
import { Link } from "react-router-dom";

const Contact = () =>
  <div>

  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  
<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<a className="navbar-brand">InspiresX</a>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav mr-auto">


  <li className="nav-item active float-right">
  <Link to="/"className="btn col ">Home</Link>
  </li>
  <li className="nav-item active float-right">
  <Link to="/about" className="btn col ">About Us</Link>
  </li>
  <li className="nav-item active float-right">
  <Link to="/contact" className="btn col ">Contact</Link>
  </li>
 
</ul>

</div>


</nav>
    <h1>Contact Page</h1>
    <p>
      Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer
      gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam.
      Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt
      fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent
      euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
    </p>
  </div>;

export default Contact;