import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import PostCard from "./PostCard";
import useNotLogedPage from "../../Hooks/useNotLogedPage";
import CreatePostData from "../../Services/Create/CreatePostData";
import CreatingVote from "../../Services/Vote/CreatingVote";
import DeleteData from "../../Services/Delete/DeleteData";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";

import {
  Boxdiv,
  StyledToolbar,
  StyledArrows,
  WritePostContainer,
  StyledAppBar,
  StyledAppBarBottom,
  StyledAppBarTop,
} from "./Style";
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
    // console.log(data.data);
    setPost(data.data);
  };

  const dataOut = (data) => {
    setPostCriado(data);
  };

  const dataUpFromPostCard = (dataIn) => {
    console.log(dataIn);
    CreatePostData("posts", dataIn, dataOut);
  };

  useEffect(() => {
    //As its been used to Commnents and Post , this urlEntred has
    // been added as a second paraments and it should be also completed
    // at least with a "" empty string.
    GetData(saveData, "");
    setPostCriado("");
  }, [postCriado, postVote, upDateDomDelete]);

  const onClickHandler = (id) => {
    console.log(id);
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
    console.log("donw");
    setPostVote("");
  };

  const responseToUpdateDom = (data) => {
    console.log(data.config.url);
    setUpDateDomDelete(data.config.url);
  };

  const onClickDeleteLikePost = (e, id) => {
    e.stopPropagation();
    console.log("Delete like post");
    DeleteData(`posts/${id}`, responseToUpdateDom);
  };

  const Posts =
    post &&
    post.map((item) => {
      return (
        <Boxdiv onClick={() => onClickHandler(item.id)} key={item.id}>
          {/* <StyledAppBarTop color='none'> */}
          <StyledAppBarTop >
            <StyledArrows>
              <IconButton
                onClick={(e) => onClickHandlerUp(e, item.id)}
                color='inherit'
              >
                <ArrowUpwardOutlinedIcon />
              </IconButton>

              <Typography>{item.voteSum ? item.voteSum : 0}</Typography>

              <IconButton
                onClick={(e) => onClickHandlerDown(e, item.id)}
                color='inherit'
              >
                <ArrowDownwardOutlinedIcon />
              </IconButton>
            </StyledArrows>

            {/* <IconButton color='inherit'> */}
              <Typography>  {
            (item.username)[0].toUpperCase()+(item.username).substr(1)
            } </Typography>
            {/* </IconButton> */}
            <Typography>
              <ModeCommentOutlinedIcon  /> {item.commentCount? item.commentCount :0  }
            </Typography>
          </StyledAppBarTop>

          <WritePostContainer>
            <Typography variant='h5'> {
            (item.title)[0].toUpperCase()+(item.title).substr(1)
            } </Typography>

            <Typography> {item.body} </Typography>
          </WritePostContainer>

          <StyledAppBarBottom >
            <Button
              onClick={(e) => onClickDeleteLikePost(e, item.id)}
              variant='text'
            >
              Remove vote
            </Button>
          </StyledAppBarBottom>
        </Boxdiv>
      );
    });

  return (
    <>
      {/* //!! Separando com Componetes */}
      {/* <Boxdiv>
        <WritePostContainer>
          <TextField fullWidth multiline rows='6' />
        </WritePostContainer>
        <Button variant='contained' fullWidth>
          Postar
        </Button>
      </Boxdiv> */}
      <PostCard dataUp={dataUpFromPostCard} buttonName={"Postar"} />
      {Posts}
    </>
  );
};

export default FeedPage;
