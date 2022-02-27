import { useState } from "react";
import {
  IconButton,
  AppBar,
  Button,
  Toolbar,
  Typography,
  TextField,
} from "@material-ui/core";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import DeleteData from "../../Services/Delete/DeleteData";
import CreatingVote from "../../Services/Vote/CreatingVote";
import {
  Boxdiv,
  StyledToolbar,
  StyledAppBar,
  StyledAppBarTitle,
  WritePostContainer,
} from "../FeedPage/Style";

const CommentCard = ({ commentsToScreen, dataUp, isPost }) => {
  // using this function to lift data from votes -1/1 and delete
  // to update the post page by props using a state in the
  // using useEffect  in <PostPage>
  const dataOutCreatPostVote = (dataOut) => {
    // dataUp(dataOut.data);
    dataUp(dataOut);
  };

  const onClickHandler = (id) => {
    // How to use it
    //DEL Delete Post Vote     {{baseURL}}/posts/:id/votes
    //DEL Delete Comment Vote {{baseURL}}/comments/:id/votes
    const urlIn = `comments/${id}`;
    DeleteData(urlIn, dataOutCreatPostVote);
  };
  const onClickHandlerUp = (e, id) => {
    e.stopPropagation();
    // Post Create Comment Vote  {{baseURL}}/
    //{{comments/:id}}   /votes  1  - 1
    // Post Create Post Vote {{baseURL}}/  {{posts/:id}} //votes  1   - 1
    CreatingVote(`comments/${id}`, 1, dataOutCreatPostVote);
  };
  const onClickHandlerDown = (e, id) => {
    e.stopPropagation();
    CreatingVote(`comments/${id}`, -1, dataOutCreatPostVote);
  };

  return (
    <Boxdiv>
      <StyledAppBar color='primary'>
        <Typography
          variant='h5'
          component='h2'
          // color="primary"
          align='center'
        >
          {isPost ? "Post" : "Comentário"}{" "}
        </Typography>
        <StyledToolbar>
          <IconButton edge='end' color='inherit'>
            <Typography> {commentsToScreen.username} </Typography>
          </IconButton>
        </StyledToolbar>
        <Typography>
          {}
          {new Date(commentsToScreen.createdAt).toLocaleString()}
        </Typography>
      </StyledAppBar>
      <WritePostContainer>
        <Typography> </Typography>
        <Typography> {commentsToScreen.username} </Typography>
        <Typography> {commentsToScreen.commentCount} </Typography>
        <Typography> {commentsToScreen.body} </Typography>
      </WritePostContainer>

      <StyledAppBar color='primary'>
        <Typography>
          {commentsToScreen.voteSum ? commentsToScreen.voteSum : 0}
        </Typography>
        {!isPost ? (
          <>
            <StyledToolbar>
              <IconButton
                onClick={(e) => onClickHandlerDown(e, commentsToScreen.id)}
                edge='end'
                color='inherit'
              >
                <ArrowDownwardOutlinedIcon />
              </IconButton>
              <IconButton
                onClick={(e) => onClickHandlerUp(e, commentsToScreen.id)}
                edge='end'
                color='inherit'
              >
                <ArrowUpwardOutlinedIcon />
              </IconButton>
            </StyledToolbar>

            <Button
              name='delete'
              onClick={() => onClickHandler(commentsToScreen.id)}
              variant='contained'
            >
              Delete comment
            </Button>
          </>
        ) : (
          ""
        )}
      </StyledAppBar>
    </Boxdiv>
  );
};

export default CommentCard;
