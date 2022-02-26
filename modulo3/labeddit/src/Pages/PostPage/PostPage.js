import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCommnetCard from "./PostCommnetCard";
import useNotLogedPage from "../../Hooks/useNotLogedPage";
import CommentCard from "./CommnetCard";
import CreatePostData from "../../Services/Create/CreatePostData";
// import {
//   Boxdiv,
//   StyledToolbar,
//   StyledAppBar,
//   WritePostContainer,
// } from "../FeedPage/Style";
import GetData from "../../Services/GetPostComments/GetData";

const PostPage = () => {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [upDateDom, setUpDateDom] = useState("");
  const [upDateDom2, setUpDateDom2] = useState("oi");
  const { id } = useParams();
  useNotLogedPage();

  const saveData = (data) => {
    setComments(data.data);
  };
  const dataOut = (data) => {
    setUpDateDom2(data);
  };

  const dataUpFromPostCommCard = (data) => {
    CreatePostData(`posts/${id}/comments`, data, dataOut);
  };
  const dataUpFromCommentCard = (dataUp) => {
    console.log("dataUp", dataUp)
    setUpDateDom(dataUp);
  };

  const saveDataGetPost = (data) => {
    setPosts(data.data);
  };

  useEffect(() => {
    GetData(saveDataGetPost, "");
  }, []);

  useEffect(() => {
    //As its been used to Commnents and Post , this urlEntred has
    // been added as a second paraments and it should be also completed
    // at least with a "" empty string.  
    //GetPost Comments {{baseURL}}/posts/:id/comments
    // Get Posts  {{baseURL}}/posts/
    // !! Getting Post 
    GetData(saveData, `${id}/comments`);
    console.log("Dom atualizado");
    setUpDateDom("");
    setUpDateDom2("");
    }, [upDateDom]);


  const commentsToScreen = comments.map((item) => (
    <CommentCard
      dataUp={dataUpFromCommentCard}
      commentsToScreen={item}
      key={item.createdAt}
    />
  ));

  const postClicked =
    posts &&
    posts.length &&
    posts
      .filter((item) => item.id == id)
      .map((item) => (
        <CommentCard
          // dataUp={dataUpFromCommentCard}
          commentsToScreen={item}
          key={item.createdAt}
          isPost={true}
        />
      ));

  return (
    <>
      {postClicked}
      <PostCommnetCard
        buttonName={"Comentar"}
        dataUp={dataUpFromPostCommCard}
      />
      {commentsToScreen}
    </>
  );
};

export default PostPage;
