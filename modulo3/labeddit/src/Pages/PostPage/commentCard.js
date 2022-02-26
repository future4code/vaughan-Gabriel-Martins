<Boxdiv>
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
    <StyledToolbar>
      <Typography>{item.voteSum ? item.voteSum : 0}</Typography>
      <IconButton
        onClick={(e) => onClickHandlerDown(e, item.id)}
        edge='end'
        color='inherit'
      >
        <ArrowDownwardOutlinedIcon />
      </IconButton>
      <IconButton
        onClick={(e) => onClickHandlerUp(e, item.id)}
        edge='end'
        color='inherit'
      >
        <ArrowUpwardOutlinedIcon />
      </IconButton>
    </StyledToolbar>
  
  </StyledAppBar>
</Boxdiv>;
