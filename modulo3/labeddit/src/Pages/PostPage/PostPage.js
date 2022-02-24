import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { IconButton, AppBar, Button, Toolbar, Typography ,  TextField } from "@material-ui/core";
import PostCard from "../../components/PostCard/PostCard";
import useNotLogedPage from "../../Hooks/useNotLogedPage";
// import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
// import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import CommentCard from "./CommnetCard";
import {
  Boxdiv,
  StyledToolbar,
  StyledAppBar,
  WritePostContainer,
} from "../FeedPage/Style"
import GetData from "../../Services/GetPostComments/GetData";

const PostPage = () => {
  const [comments, setComments] = useState([])
  const{id} = useParams();
  console.log("usepara ",id);
  useNotLogedPage();
  
  const saveData = (data) => {
    console.log("Postpage data ", data.data);
    setComments(data.data);
  };

  useEffect(() => {
//As its been used to Commnents and Post , this urlEntred has 
// been added as a second paraments and it should be also completed 
// at least with a "" empty string.  GetPost Comments {{baseURL}}/posts/:id/comments
// Get Posts  {{baseURL}}/posts/
 
    GetData(saveData, `${id}/comments` );
  }, []);


  return(
    <>

      <CommentCard/>
      <PostCard buttonName={"Comentar"} dataUp={saveData} />
      <CommentCard/>

      </>
    
  );
}

export default PostPage;
