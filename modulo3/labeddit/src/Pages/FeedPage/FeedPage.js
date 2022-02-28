import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import useNotLogedPage from "../../Hooks/useNotLogedPage";
import CreatePostData from "../../Services/Create/CreatePostData";
import CreatingVote from "../../Services/Vote/CreatingVote";
import DeleteData from "../../Services/Delete/DeleteData";
import RecipeReviewCard from "../../components/CardMUI";
import GetData from "../../Services/GetPostComments/GetData";
import { goToPost } from "../../routers/coordenates";

const FeedPage = () => {
  const navigate = useNavigate();
  useNotLogedPage();
  const [post, setPost] = useState([]);
  const [postCriado, setPostCriado] = useState("");
  const [postVote, setPostVote] = useState("");
  const [upDateDomDelete, setUpDateDomDelete] = useState("");

  const [creatingAPost, setCreatingAPost] = useState("");

  const saveData = (data) => {
    setPost(data.data);
  };

  const dataOut = (data) => {
    setPostCriado(data);
  };

  const dataUpFromPostCard = (dataIn) => {
    CreatePostData("posts", dataIn, dataOut);
  };

  const onClickHandlerGoToPost = (id) => {
    goToPost(navigate, id);
  };

  const dataOutCreatPostVote = (dataOut) => {
    setPostVote(dataOut.data);
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
  const onClickHandlerDown = (e, id) => {
    e.stopPropagation();
    CreatingVote(`posts/${id}`, -1, dataOutCreatPostVote);
    setPostVote("");
  };

  const responseToUpdateDom = (data) => {
    console.log(data.statusText);
    setUpDateDomDelete(data.statusText);
  };

  const onClickDeleteLikePost = (e, id) => {
    e.stopPropagation();
    DeleteData(`posts/${id}`, responseToUpdateDom);
  };

  useEffect(() => {
    //As its been used to Commnents and Post , this urlEntred has
    // been added as a second paraments and it should be also completed
    // at least with a "" empty string.
    GetData(saveData, "");
    setPostCriado("");
    setUpDateDomDelete("");
  }, [postCriado, postVote, upDateDomDelete]);

  const Posts =
    post &&
    post.map((item) => {
      return (
        <>
          <RecipeReviewCard
            item={item}
            onClickHandlerUp={onClickHandlerUp}
            onClickHandlerDown={onClickHandlerDown}
            onClickDeleteLikePost={onClickDeleteLikePost}
            onClickHandlerGoToPost={onClickHandlerGoToPost}
            key={item.id}
          />
        </>
      );
    });

  return (
    <>
      <PostCard dataUp={dataUpFromPostCard} buttonName={"Postar"} />
      {Posts}
    </>
  );
};

export default FeedPage;
