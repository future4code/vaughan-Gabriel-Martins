import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCommnetCard from "./PostCommnetCard";
import useNotLogedPage from "../../Hooks/useNotLogedPage";
import CommentCard from "./CommnetCard";
import CreatePostData from "../../Services/Create/CreatePostData";
import GetData from "../../Services/GetPostComments/GetData";
import RecipeReviewCard from "../../components/CardMUI";
import DeleteData from "../../Services/Delete/DeleteData";
import CreatingVote from "../../Services/Vote/CreatingVote";

const PostPage = () => {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [upDateDom, setUpDateDom] = useState("");
  const [upDateDom2, setUpDateDom2] = useState("oi");
  const [postVote, setPostVote] = useState("");
  const [upDateDomDelete, setUpDateDomDelete] = useState("");

  const { id } = useParams();
  useNotLogedPage();

  const saveData = (data) => {
    setComments(data.data);
  };
  const dataOut = (data) => {
    setUpDateDom2(data);
  };
  const dataOutCreatPostVote = (dataOut) => {
    setPostVote(dataOut.data);
  };
  const responseToUpdateDom = (data) => {
    setUpDateDomDelete(data.statusText);
  };

  const dataUpFromPostCommCard = (data) => {
    CreatePostData(`posts/${id}/comments`, data, dataOut);
  };
  const dataUpFromCommentCard = (dataUp) => {
    setUpDateDom(dataUp);
  };

  const saveDataGetPost = (data) => {
    setPosts(data.data);
  };

  useEffect(() => {
    GetData(saveDataGetPost, "");
    setUpDateDomDelete("");
  }, [postVote, upDateDomDelete, upDateDom2]);

  useEffect(() => {
    //As its been used to Commnents and Post , this urlEntred has
    // been added as a second paraments and it should be also completed
    // at least with a "" empty string.
    //GetPost Comments {{baseURL}}/posts/:id/comments
    // Get Posts  {{baseURL}}/posts/
    // !! Getting Post
    GetData(saveData, `${id}/comments`);
    setUpDateDom("");
    setUpDateDom2("");
  }, [upDateDom, upDateDom2]);

  const commentsToScreen = comments.map((item) => (
    <CommentCard
      dataUp={dataUpFromCommentCard}
      commentsToScreen={item}
      key={item.createdAt}
    />
  ));

   
  const onClickDeleteLikePost = (e, id) => {
    e.stopPropagation();
    DeleteData(`posts/${id}`, responseToUpdateDom);
  };
  const onClickHandlerDown = (e, id) => {
    e.stopPropagation();
    CreatingVote(`posts/${id}`, -1, dataOutCreatPostVote);
    setPostVote("");
  };
  const onClickHandlerUp = (e, id) => {
    e.stopPropagation();
    console.log("up");
    // Post Create Comment Vote  {{baseURL}}/
    //{{comments/:id}}   /votes  1  - 1
    // Post Create Post Vote {{baseURL}}/  {{posts/:id}}
    //votes     1   - 1
    CreatingVote(`posts/${id}`, 1, dataOutCreatPostVote);
    setPostVote("");
  };


  const postClicked =
    posts &&
    posts.length &&
    posts
      .filter((item) => item.id == id)
      .map((item) => (<>

            <RecipeReviewCard
            item={item}
            onClickHandlerUp={onClickHandlerUp}
            onClickHandlerDown={onClickHandlerDown}
            onClickDeleteLikePost={onClickDeleteLikePost}
            key={item.id}
          />
        </>
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
