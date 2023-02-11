import React,{Component} from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ShowUsers from "./components/ShowUsers";
import  Users from "./components/Users";
import Footer from "./components/Footer";
import "./config/config.json";
import  Edituser from "./components/Edituser";
import{route} from "./router";

//import " bootstrap/dist/js/bootstrap.bundle.js";
//import " bootstrap/dist/css/bootstrap.min.css";

import "./App.css"


export default class App extends Component{

    constructor(props){
        super(props)

        this.id=window.localStorage.getItem('hash').split('/')[1]

    this.views={
        home:<Home/>,
        showuser:<ShowUsers/>,
        createuser:<Users/>,
        ["edituser/"+this.id]:<Edituser userId={this.id}/>
    }
}
    
        


    renderView = () => {
        return this.views[route];
    }
    render = () => {
    return (
        <React.Fragment>
           <Header/>
           {this.renderView()}
           <Footer/>
        </React.Fragment>
    )

    }

}