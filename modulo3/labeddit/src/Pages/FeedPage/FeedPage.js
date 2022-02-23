import React from "react";
import { AppBar, Button, Fab, Toolbar, TextField, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import PostCard from '../../components/PostCard/PostCard';

import {
  Boxdiv,
  StyledToolbar,
  StyledAppBar,
  WritePostContainer,
} from "./Style";

const FeedPage = () => {

    
   const savaData = (data) =>{ 
       console.log(data);
   }
     


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
       <PostCard 
       dataUp={savaData}
       buttonName={"Postar"}

       />

      <Boxdiv>
        <StyledAppBar color='primary'>
          <StyledToolbar>
            <IconButton edge='end' color='inherit'>
            </IconButton>
          </StyledToolbar>
        </StyledAppBar>
        <WritePostContainer>
          <Typography>Post aki </Typography>
        </WritePostContainer>
        <StyledAppBar color='primary'>
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
    </>
  );
};

export default FeedPage;
