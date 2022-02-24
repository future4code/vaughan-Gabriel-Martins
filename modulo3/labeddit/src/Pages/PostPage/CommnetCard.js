import { IconButton, AppBar, Button, Toolbar, Typography ,  TextField } from "@material-ui/core";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import {
  Boxdiv,
  StyledToolbar,
  StyledAppBar,
  WritePostContainer,
} from "../FeedPage/Style"



const CommentCard = () => { 

  return (
  <Boxdiv >
<StyledAppBar color='primary'>
  <StyledToolbar>
    <IconButton edge='end' color='inherit'>
      <Typography> username </Typography>
    </IconButton>
  </StyledToolbar>
</StyledAppBar>
<WritePostContainer>
  {/* <Typography> {item.username} </Typography> */}
  <Typography> oi </Typography>
  {/* <Typography> {item.commentCount} </Typography> */}
  <Typography> body </Typography>
</WritePostContainer>

<StyledAppBar color='primary'>
  <Typography> voteSum </Typography>
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