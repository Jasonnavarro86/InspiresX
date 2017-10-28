import React from 'react';
import { Link, Route } from "react-router-dom";




const UserGoalBtn = (props) => (


    <div>
        <Link to={`${props.url}/quit`} className="btn btn-sm btn-danger"> Quit</Link>

         <Link to={`${props.url} `} className="btn btn-sm btn-danger"> Feel Like Quitting </Link>

        <Link to={`${props.url}`} className="btn btn-sm btn-danger"> Need Help Learning</Link>

        <Link to={`${props.url}`} className="btn btn-sm btn-danger"> Need Help Pushing Through</Link>

        <Link to={`${props.url}`} className="btn btn-sm btn-danger"> Feel Good</Link>

        <Link to={`${props.url}`} className="btn btn-sm btn-danger"> Feel Great</Link>

        <Link to={`${props.url}`} className="btn btn-sm btn-danger">Completed My Goal!</Link> 

        <Route exact path={`${props.url}/quit`} component={"Quit"}/>
        
    </div>
);


export default UserGoalBtn;