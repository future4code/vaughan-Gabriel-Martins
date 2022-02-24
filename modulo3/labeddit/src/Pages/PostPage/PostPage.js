import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCommnetCard from "./PostCommnetCard";
import useNotLogedPage from "../../Hooks/useNotLogedPage";
import CommentCard from "./CommnetCard";
import CreatePostData from '../../Services/Create/CreatePostData';
import {
  Boxdiv,
  StyledToolbar,
  StyledAppBar,
  WritePostContainer,
} from "../FeedPage/Style";
import GetData from "../../Services/GetPostComments/GetData";

const PostPage = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  useNotLogedPage();

  const saveData = (data) => {
    setComments(data.data);
   
  };

  const dataUpFromPostCommCard =(dataUp)=> { 
     const data = { "body": dataUp}
    CreatePostData(`posts/${id}/comments`, data)
    console.log(data)
  }

  useEffect(() => {
    //As its been used to Commnents and Post , this urlEntred has
    // been added as a second paraments and it should be also completed
    // at least with a "" empty string.  GetPost Comments {{baseURL}}/posts/:id/comments
    // Get Posts  {{baseURL}}/posts/

    GetData(saveData, `${id}/comments`);
  }, []);

  const commentsToScreen = comments.map((item) => (
    <CommentCard commentsToScreen={item} />
  ));

  return (
    <>
      <PostCommnetCard buttonName={"Comentar"} dataUp={dataUpFromPostCommCard} />
      {commentsToScreen}
    </>
  );
};

export default PostPage;
