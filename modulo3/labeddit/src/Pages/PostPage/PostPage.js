import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCommnetCard from "./PostCommnetCard";
import useNotLogedPage from "../../Hooks/useNotLogedPage";
import CommentCard from "./CommnetCard";
import CreatePostData from '../../Services/Create/CreatePostData';
// import {
//   Boxdiv,
//   StyledToolbar,
//   StyledAppBar,
//   WritePostContainer,
// } from "../FeedPage/Style";
import GetData from "../../Services/GetPostComments/GetData";

const PostPage = () => {
  const [comments, setComments] = useState([]);
  const [upDateDom, setUpDateDom] = useState("oi");
  const [upDateDom2, setUpDateDom2] = useState("oi");
  const { id } = useParams();
  useNotLogedPage();

  const saveData = (data) => {
    setComments(data.data);
  };
  const dataOut = (data) => {
    console.log("dataOUt", data.data);
    setUpDateDom2(data);
  };

  const dataUpFromPostCommCard =(dataUp)=> { 
    CreatePostData(`posts/${id}/comments`, dataUp, dataOut)
    console.log(dataUp)
  }
  const dataUpFromCommentCard =(dataUp)=> { 
    console.log("up/donw" ,dataUp )
    setUpDateDom(dataUp)
  }

  useEffect(() => {
    //As its been used to Commnents and Post , this urlEntred has
    // been added as a second paraments and it should be also completed
    // at least with a "" empty string.  GetPost Comments {{baseURL}}/posts/:id/comments
    // Get Posts  {{baseURL}}/posts/

    GetData(saveData, `${id}/comments`);
    setUpDateDom("")
    setUpDateDom2("")
  }, [upDateDom , upDateDom2]);

  const commentsToScreen = comments.map((item) => (
    <CommentCard 
    dataUp={dataUpFromCommentCard}
    commentsToScreen={item} 
    key={item.createdAt}
  
    />
  ));

  return (
    <>
    { console.log("UpDateDom",upDateDom )}
      <PostCommnetCard 
      buttonName={"Comentar"} 
      dataUp={dataUpFromPostCommCard} />
      {commentsToScreen}
    </>
  );
};

export default PostPage;
