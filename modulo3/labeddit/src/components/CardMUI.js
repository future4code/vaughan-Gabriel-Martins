import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: "10px auto",
    "&:hover":{
      cursor:"pointer",    
    }
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({
  item,
  onClickDeleteLikePost,
  onClickHandlerDown,
  onClickHandlerUp,
  onClickHandlerGoToPost,
}) {
  const classes = useStyles();

  return (
    <Card
      
      className={classes.root}
      onClick={() => onClickHandlerGoToPost(item.id)}
    >
      {console.log(item)}
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {item.username[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label='comments'>
            {item.commentCount ? (
              <ModeCommentIcon style={{ color: "red" }} />
            ) : (
              <ModeCommentOutlinedIcon />
            )}
            <Typography>{item.commentCount ? item.commentCount : 0}</Typography>
          </IconButton>
        }
        subheader={item.title[0].toUpperCase() + item.title.substr(1)}
        title={`${
          item.username[0].toUpperCase() + item.username.substr(1)
        } ${new Date(item.createdAt).toLocaleString()}`}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {item.body}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          height: "30px ",
          display: "flex",

          justifyContent: "space-between  ",
        }}
      >
        <div>
          <IconButton style={{ color: "black" }} aria-label='vote'>
            {item.voteSum ? item.voteSum : "0"}
          </IconButton>

          <IconButton />

          {item.userVote > 0 ? (
            <IconButton onClick={(e) => onClickDeleteLikePost(e, item.id)}>
              <ThumbUpIcon style={{ color: "red" }} />
            </IconButton>
          ) : (
            <IconButton onClick={(e) => onClickHandlerUp(e, item.id)}>
              <ThumbUpAltOutlinedIcon />
            </IconButton>
          )}

          <IconButton
            onClick={(e) => onClickHandlerDown(e, item.id)}
            aria-label='vote'
          >
            {item.userVote < 0 ? (
              <ThumbDownIcon
                style={{ color: "blue" }}
                onClick={(e) => onClickDeleteLikePost(e, item.id)}
              />
            ) : (
              <ThumbDownAltOutlinedIcon />
            )}
          </IconButton>
          {/* <Button
            aria-label='vote'
            onClick={(e) => onClickDeleteLikePost(e, item.id)}
            variant='text'
          >
            Remove vote
          </Button> */}
        </div>

        <div>
          <IconButton aria-label='vote'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
