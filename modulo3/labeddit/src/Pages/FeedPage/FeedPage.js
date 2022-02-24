import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  TextField,
  Typography,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import PostCard from './PostCard';
import useNotLogedPage from '../../Hooks/useNotLogedPage';
import CreatePostData from '../../Services/Create/CreatePostData';

import {
  Boxdiv,
  StyledToolbar,
  StyledAppBar,
  WritePostContainer,
} from "./Style";
import GetData from "../../Services/GetPostComments/GetData";
import { goToPost } from "../../routers/coordenates";

const FeedPage = () => {
  const navigate = useNavigate();
  useNotLogedPage();
  const [post, setPost] = useState([]);
  const [creatingAPost, setCreatingAPost] = useState("");

  const saveData = (data) => {
    // console.log(data.data);
    setPost(data.data);
  };

  const dataUpFromPostCard = (data) => {
    console.log(data);
    CreatePostData("/posts", data)
  };


  useEffect(() => {
    //As its been used to Commnents and Post , this urlEntred has
    // been added as a second paraments and it should be also completed
    // at least with a "" empty string.
    GetData(saveData, "");
  }, []);

  const onClickHandler = (id) => {
    console.log(id);
    goToPost(navigate, id);
  };

  const Posts =
    post &&
    post.map((item) => {
      return (
        <Boxdiv onClick={() => onClickHandler(item.id)} key={item.id}>
          <StyledAppBar color='primary'>
            <StyledToolbar>
              <IconButton edge='end' color='inherit'>
                <Typography> {item.username} </Typography>
              </IconButton>
            </StyledToolbar>
          </StyledAppBar>

          <WritePostContainer>
            <Typography> {item.username} </Typography>
            <Typography> {item.title} </Typography>
            <Typography> {item.commentCount} </Typography>
            <Typography> {item.body} </Typography>
          </WritePostContainer>

          <StyledAppBar color='primary'>
            <Typography> {item.voteSum} </Typography>
            <StyledToolbar>
              <IconButton edge='end' color='inherit'>
                <ArrowDownwardOutlinedIcon />
              </IconButton>
              <IconButton edge='end' color='inherit'>
                <ArrowUpwardOutlinedIcon />
              </IconButton>
            </StyledToolbar>
          </StyledAppBar>
        </Boxdiv>
      );
    });

  return (
    <>
      {/* //!! Saparado com Componetes */}
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
