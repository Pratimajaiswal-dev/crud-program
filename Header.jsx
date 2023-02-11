import React,{Component} from "react";
import "./styles/header.css";
 
export default class Header extends Component{
    render =()=>{
    return (
          
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
           
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#createuser">create user</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#showuser">show user</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          
    )
    }
}