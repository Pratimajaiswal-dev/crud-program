import React,{Component} from "react";
import {route,redirect} from "../router";
 
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Users extends Component{

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
            <h3 className="text-danger text-center">User Register Here..</h3>
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
         <input className="btn btn-danger form-control" type="button" value="SAVE" onClick={this.saveData}/>
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

    saveData=()=>{
        // console.clear();
        //console.log(this.state);
        //console.log();
        const url='http://localhost:5000/users/';

        let newObject = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            mobile:this.state.mobile,
        }

        let promise=fetch(url,{
            headers:{
                "Content-Type":"application/json",
            },
            method:"POST",
            body:JSON.stringify(newObject),
        });
    
        promise.then((response)=>{
             
                if (response.ok){
                    this.setState({
                        name:"",
                        email:"",
                        mobile:"",
                        password:"",
                       msg:<span className="success">User created sucessfully!</span>
                    });

                    //let ID1=setTimeout(()=>{
                       // this.setState({
                          //  msg:"",
                        //});
                    //,5000});


                            return redirect ('showuser');
                }


        }).then((data)=>{
            console.log(data)

           // (parameter) error : any

        }).catch((error)=>{
            console.log(error);
            this.setState({
                msg:<span className="error">OOPS! Try Again Later</span>
            });

            let ID1=setTimeout(()=>{
                 this.setState({
                     msg:"",
                 });
        },5000);
        });
    }
}
    
    
 
    