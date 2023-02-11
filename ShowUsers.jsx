import React,{Component} from "react";
import {route,redirect} from "../router";
import config from "../config/config.json";
 
export default class ShowUsers extends Component{

     //mounting states
     constructor(props){

      console.log('This is mounting state : 1st cycle');
      super(props);

      this.state={
        name:"",
        email:"",
        mobile:"",
        password:"",
        users:[],
        msg:""
   }

 }
     componentDidMount(){;

          console.log('This is update state:  2nd cycle');
          //var arr = [];

      const url=config.LOCAL_URL;

      /***********************************start of promise fetch api*******************************************/

      let promise=fetch(url);

      promise.then((response)=>{
          return response.json();
      }).then((data)=>{
        //object Json
        if(Array.isArray(data)){
          console.log("chal rha h");
          this.setState({
           users:data
         })

        }
           
      }).catch((error)=>{
          console.log(error);
      })

      /*****************End of promise fetch api********************/

         

     }

     componentWillMount(){
      console.log('unmounted state is 3rd cycle');
     }

      
    render = () =>{
      console.log(this.state.users,'render');
    return (
      <div> 
      <h3 class="text-danger text-center">User Records</h3>
      <hr/>
      {this.state.msg}
        <table className="border='1' rules='all' bg-info">
        <thead>
          <tr className="text-danger">
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Edit</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
                              {this.getRecords()}
        </tbody>
      </table>
      </div> 
    )
  }
    
    getRecords = () =>{

      //console.log("Now render the table",this.state.users)
      return this.state.users.map((item,index)=>{

        return(

          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
             {/*<td><a href={"#edit/"+item.id}>Edit</a></td>
            <td><a href={"#delete/"+item.id}>Delete</a></td>*/}
            <td><button type="button"
            onClick={()=>{this.edituser(item.id)}}>
            Edit</button>
            </td>
            <td>
             <button type="button"
              onClick={()=>{this.deleteuser(item.id)}}>
               Delete
              </button>
           </td>
          </tr>
        )
      })

    }

    deleteuser = (id,index) =>{
      if(window.confirm('Are you sure want to delete?')){
        //fetch Api
          //console.log(id);
          const url=config.LOCAL_URL+id;
         
  
          let promise=fetch(url,{
              headers:{
                  "Content-Type":"application/json",
              },
              method:"DELETE",
          });
      
          promise.then((response)=>{
               
                  if (response.ok){

                    let userData =[...this.state.users];
                    userData.splice(index,1);

                      this.setState({
                        users:userData,
                         msg:<span className="success">User Deleted Sucessfully!</span>
                      });
                          

                      setTimeout(()=>{
                         this.setState({
                             msg:""
                        });
                  },5000);
  
  
                              return redirect ('showuser');
                  }
  
  
          }).then((data)=>{
              console.log(data)
  
             // (parameter) error : any
  
          }).catch((error)=>{
              console.log(error);
              this.setState({
                  msg:<span className="error-alert">OOPS! Try Again Later</span>
              });
  
              let ID1=setTimeout(()=>{
                   this.setState({
                       msg:"",
                   });
          },5000);
          });
      }
      }

      edituser =(id) =>{
        //console.log(id);
        return redirect ('edituser/'+id);
      }
    }



 

  
