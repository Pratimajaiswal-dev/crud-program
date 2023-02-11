import React,{Component} from "react";
import {route,redirect} from "../router";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "../config/config.json";

export default class Edituser extends Component{

        //lifecycle : mounting state

    constructor(props){
        super(props);
    this.state={
     
        name:"",
        email:"",
        mobile:"",
        password:"",
        users:[],
        msg:"",
    }
}

   
    render =()=>
    {
        //console.log(this.state);
    return (
        <React.Fragment> 
        <div>
            <h3 className="text-danger text-center">Edit User Here..</h3>
            <hr/>
                {this.state.msg}
          <form> 
        <div className="container mx-auto p-4">
        <div className="row bg-info">
        <div className="col-sm-6 contact mt-3">
        Name:
        <div className="input-group">
        <span className="input-group-text text-WHITE bg-danger">
        <i className="fa-solid fa-user"></i>
        </span>
        <input type="text" value={this.state.name}onChange={(event)=>{this.setState({name:event.target.value})}} 
        className="form-control" placeholder="Enter your name "/>
        </div>
        Email:
        <div className="input-group">
        <span className="input-group-text text-WHITE bg-danger">
        <i className="fa-solid fa-envelope"></i>
        </span>
        <input type="email" value={this.state.email}onChange={(event)=>{this.setState({email:event.target.value})}} 
        className="form-control" placeholder="Enter your email"/>
        </div>
        Mobile No:
        <div className="input-group">
        <span className="input-group-text text-WHITE bg-danger">
        <i className="fa-solid fa-phone"></i>
        </span>
        <input type="mobile" value={this.state.mobile}onChange={(event)=>{this.setState({mobile:event.target.value})}} 
        className="form-control" placeholder="Enter your Mobile No"/>
        </div>
        Password:
        <div className="input-group">
        <span className="input-group-text text-WHITE bg-danger">
        <i className="fa-solid fa-phone"></i>
        </span>
        <input type="password" 
        className="form-control" placeholder="Enter your password" value={this.state.password}onChange={(event)=>{this.setState({password:event.target.value})}} />
        </div>
         <br/>
         <input className="btn btn-danger form-control" type="button" value="update" 
         
       //onClickClick={()=>{validate();this.updateData(this.props.userId)}} ====>use this when multiple function call need 
         
        onClick={this.updateData}/>
        </div>

        <div className="col-sm-6 pic mt-3 p-3 ">

        <img src="images/img1.jpg" height="320px"/>

        </div>
        </div>
        </div>
        </form>
        </div>
        </React.Fragment> 
       
    )
    }


componentDidMount(){

    let id=this.props.userId;
    let promise = fetch(config.LOCAL_URL+id).then((response)=>{
        
        if(response.ok){
            return response.json();

        }
    }).then((data)=>{

        this.setState({
            name:data.name,
            email:data.email,
            mobile:data.mobile,
            password:data.password,
        });

    }).catch((error)=>{
        
    });

    }
    updateData = () => {

        let id=this.props.userId;
        let updateUser={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            password:this.state.password,
        }

        //Api request
        console.log(config);
        //console.log(proces.env);
        let promise = fetch(config.LOCAL_URL+id,{
            headers:{
                "Content-Type":"application/json"
            },
            method:"PUT",
            body:JSON.stringify(updateUser)
        }).then ((response)=>{
            if(response.ok){
                return redirect('showuser');
            }
        }).then((data)=>{

        }).catch((error)=>{
            console.log(error)

        });
    }
}



 
    
 
    