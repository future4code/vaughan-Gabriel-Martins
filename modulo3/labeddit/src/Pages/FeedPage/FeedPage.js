import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import PostCard from "./PostCard";
import useNotLogedPage from "../../Hooks/useNotLogedPage";
import CreatePostData from "../../Services/Create/CreatePostData";
import CreatingVote from "../../Services/Vote/CreatingVote";
import DeleteData from "../../Services/Delete/DeleteData";
import RecipeReviewCard from "../../components/CardMUI";
import GetData from "../../Services/GetPostComments/GetData";
import { goToPost } from "../../routers/coordenates";
import Loading from "../../components/loading/Loading";
import BasicPagination from "../../components/Pagging/Pagging";
import useForm from "../../Hooks/useForm";
import { StyledSearch } from "./Style";

const FeedPage = () => {
  const{onChange, form, clear } = useForm({search:""})
  const navigate = useNavigate();
  useNotLogedPage();
  const [post, setPost] = useState([]);
  const [postCriado, setPostCriado] = useState("");
  const [postVote, setPostVote] = useState("");
  const [upDateDomDelete, setUpDateDomDelete] = useState("");
  const [page, setPage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const saveData = (data) => {
    setPost(data.data);
  };

  const dataOut = (data) => {
    setPostCriado(data);
  };

  const dataUpFromPostCard = (dataIn) => {
    CreatePostData("posts", dataIn, dataOut);
  };
  const dataOutCreatPostVote = (dataOut) => {
    setPostVote(dataOut.data);
  };

  const onClickHandlerGoToPost = (id) => {
    goToPost(navigate, id);
  };

  const onClickHandlerUp = (e, id) => {
    e.stopPropagation();
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
    GetData(saveData, `?page=${page}&size=30`, setIsLoading);
    setPostCriado("");
    setUpDateDomDelete("");
  }, [postCriado, postVote, upDateDomDelete, page]);


  const onSubmitHandler=(e)=> { 
    e.preventDefault();
    clear()
  }



  const Posts =
    post &&
    post
      .filter(item => 
        item.username.toLowerCase().includes(form.search.toLowerCase()) || 
        item.body.toLowerCase().includes(form.search.toLowerCase()))
      .map((item) => {
      return (
        <RecipeReviewCard
          item={item}
          onClickHandlerUp={onClickHandlerUp}
          onClickHandlerDown={onClickHandlerDown}
          onClickDeleteLikePost={onClickDeleteLikePost}
          onClickHandlerGoToPost={onClickHandlerGoToPost}
          key={item.id}
        />
      );
    });

  return (
    <>
      <StyledSearch>
       
            <BasicPagination pageToFeed={setPage} />
            <form onSubmit={onSubmitHandler}>
            <TextField 
            name="search"
            onChange={onChange}
            value={form.search}
            size="small"
            placeholder="Buscar "
            />
            </form>
           
        
      </StyledSearch>

      {PostCard && (
        <PostCard dataUp={dataUpFromPostCard} buttonName={"Postar"} />
      )}
      {isLoading ?   <Loading /> : (Posts.length && Posts)}
    </>
  );
};

export default FeedPage;
