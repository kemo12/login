import React, { useState } from 'react'
import withStorage from '../WithLocalStorge/WithLocalStorge';

const Login = ({save}) => {
    const [UserName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const Change=(e)=>{
        if(e.target.name=="username"){
            setUserName(e.target.value);
            console.log({hi: e.target.value});
        }
        else
         if(e.target.name=="password"){
            setPassword(e.target.value);
        }
    }
    const handleSave=()=>{
        save("username",UserName);
        save("password",password);
    }
    return (
        <div style={{margin:"150px",width:"1000px" ,background:"blue",height:"150px"}}>
            <p>
        <b style={{textAlign:"right",marginLeft:"5px"}}>login</b>
        </p>
        <div>

      <form style={{display:"flex",margin:"30px",textAlign:"center"}}>

     <input onChange={Change} value={UserName} name="username" placeholder="Enter UserName" type="text" style={{marginLeft:"20px",width:"200px",height:"40px"}}/>
     <input  onChange={Change} value={password} name="password" placeholder="Enter Password" type="password" style={{marginLeft:"20px",width:"200px",height:"40px"}}/>
    
      <button onClick={handleSave} style={{marginLeft:"30px",height:"40px",width:"100px"}}>login</button>
      </form>
        </div> 
        </div>
    )
}

export default withStorage(Login)
