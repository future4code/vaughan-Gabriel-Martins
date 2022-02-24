import { IconButton, AppBar, Button, Toolbar, Typography ,  TextField } from "@material-ui/core";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import {
  Boxdiv,
  StyledToolbar,
  StyledAppBar,
  WritePostContainer,
} from "../FeedPage/Style"



const CommentCard = ({commentsToScreen}) => { 

  return (
  <Boxdiv >
<StyledAppBar color='primary'>
  <StyledToolbar>
    <IconButton edge='end' color='inherit'>
      <Typography> {commentsToScreen.username}  </Typography>
    </IconButton>
  </StyledToolbar>
      <Typography>  {(new Date(commentsToScreen.createdAt)).toLocaleString()} </Typography>
</StyledAppBar>
<WritePostContainer>
  <Typography>  </Typography>
  <Typography> {commentsToScreen.username} </Typography>
  <Typography> {commentsToScreen.commentCount} </Typography>
  <Typography> {commentsToScreen.body} </Typography>
</WritePostContainer>

<StyledAppBar color='primary'>
  <Typography> {commentsToScreen.voteSum ? commentsToScreen.voteSum : 0 } </Typography>
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
  )
}

export default CommentCard;