import React, { useState, useEffect } from "react";
import Axios from 'axios';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { red, green, blue } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import clsx from "clsx";
import styled from "styled-components";

import { UrlBase } from '../../constants/constants';

import imagem from "../../assets/img/imagem.jpeg";

const DivWords = styled.div`
  position: absolute;
  color:white;
  top:430px;
  left:0px;
  width: 90%;
  padding:10px;
  margin:0 5%;
  height: 120px;
  box-sizing: border-box;
  background: rgba(50,50, 50, 0.837);
`;

const useStyles = makeStyles({
  mainContainer: {
    position:'relative',
    maxWidth: "400px",
    margin: "20% auto",
    boxShadow: "0 0 1px 1px  black ",
  },
  cardHeaderClass: {
    borderBottom: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  media: {
    height: 448,
    margin: "10px 24px",
    borderRadius: 5,
    boxShadow: "0 0 4px 1px black ",
  },
  BtnLikeNot: {
    boxShadow: "0 0 2px 1px  ",
  },
  icon: {
    height: "2rem",
    width: "2.5rem",
  },
  cardBtn: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btnNo: {
    margin: "1rem 0  1rem  3rem",
    color: red[700],
    // background: red[0],
    "&:hover": {
      background: red[800],
      color: red[100],
    },
  },
  btnYes: {
    margin: "1rem 3rem 1rem 0",
    background: green[50],
    color: green[700],
    "&:hover": {
      background: green[800],
      color: green[100],
    },
  },
});

const Main = () => {
  const classes = useStyles();
  const [liked, setLiked] = useState('');
  const [profile, setProfile] = useState('');


  const onClickHandlerLiked =(id) => { 
    console.log('liked')
    setLiked(true);
    console.log(id)
    choosePert(id ,true)
    
  }
  const onClickHandlerNotLiked =(id)=>{ 
    console.log('notliked')
    console.log(id)
    setLiked(false);
    choosePert(id, false)
  }


  useEffect(() => {
    getProfileToChoose()
  }, [liked])

  const getProfileToChoose = () => {

    const url = `${UrlBase}person`

    Axios
      .get(url)
      .then(res => {
        console.log(res.data.profile)
        setProfile(res.data.profile)
      })
      .catch(err => console.log(err))

  }


  const choosePert =(idP, option) => { 
    const url = `${UrlBase}choose-person`;
    const body = { "id": `${idP}` , 'choice': `${option}` }
    Axios
      .post(url,body)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  console.log(liked)

  return (
    <Card className={classes.mainContainer} align='center'>
      <CardHeader
        className={classes.cardHeaderClass}
        title='astromatch'
        action={
          <>
            <IconButton aria-label='matches'>
              <MoreVertIcon />
            </IconButton>
          </>
        }
      />

      <CardContent className={classes.cardHeaderClass}>
        <Typography>Oi</Typography>
        <IconButton aria-label='matches'>
          <MoreVertIcon />
        </IconButton>
      </CardContent>

      <CardMedia
        className={classes.media}
        // image="imagem"
        image={profile.photo || imagem}
        title='Profile Photo'
      />
      <DivWords><Typography variant="h6">
          {profile.name} &nbsp;{profile.id}&nbsp;
          {profile.age}
        </Typography>
        <Typography>{profile.bio}</Typography> </DivWords>
      <CardActions className={classes.cardBtn}>
        <IconButton
          onClick={() =>onClickHandlerNotLiked(profile.id)}
          className={clsx(classes.BtnLikeNot, classes.btnNo)}>
          <CloseOutlinedIcon className={classes.icon} />
        </IconButton>
        <IconButton
          onClick={()=>onClickHandlerLiked(profile.id)}
          className={clsx(classes.BtnLikeNot, classes.btnYes)}
        >
          <FavoriteIcon className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Main;
