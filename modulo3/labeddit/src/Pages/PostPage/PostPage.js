import React, { useState} from "react";
import { AppBar, Button, Fab, Toolbar, TextField } from "@material-ui/core";
import PostCard  from '../../components/PostCard/PostCard';
import {
  Boxdiv,
  WritePostContainer,
} from "./style";

const PostPage = () => {
    const [postado , setPostado] = useState("");

   
        
   const savaData = (data) =>{ 
    console.log(data);
}
  

 

  return (
   <PostCard
   buttonName ={"Comentar"}
   dataUp={savaData}
   />

  ) 
}

export default PostPage;