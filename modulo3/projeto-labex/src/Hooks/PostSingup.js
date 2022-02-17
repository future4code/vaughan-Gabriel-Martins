// import React from "react";
import axios from "axios";
import { Url_Base } from "../constants/Url_Base";

  const PostSingup = (emailEntered, passwordEntered, saveData, saveDataErr) => { 
    const url= `${Url_Base}/signup`
    const body={email: emailEntered,  password: passwordEntered}
 return  ( 

     axios
     .post(url,body)
     .then(res => { 
         console.log(res) 
         saveData(res)
     })
     .catch(err => { 
         console.log(err)
         saveDataErr(err.response) 
     })
     
    
    
     )
}

export default  PostSingup;