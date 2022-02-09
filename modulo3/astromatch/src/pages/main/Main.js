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

const DivBtn = styled.div`
  display: flex;
  background: red;
`;

const useStyles = makeStyles({
  mainContainer: {
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


  const onClickHandlerLiked =() => { 
    console.log('liked')
    
  }
  const onClickHandlerNotLiked =()=>{ 
    console.log('notliked')

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
        image={profile.photo}
        title='Profile Photo'
      />
      <div><Typography>{profile.name}</Typography>
        <Typography>
          {profile.age}
        </Typography>
        <Typography>{profile.bio}</Typography> </div>
      <CardActions className={classes.cardBtn}>
        <IconButton
          onClick={onClickHandlerNotLiked}
          className={clsx(classes.BtnLikeNot, classes.btnNo)}>
          <CloseOutlinedIcon className={classes.icon} />
        </IconButton>
        <IconButton
          onClick={onClickHandlerLiked}
          className={clsx(classes.BtnLikeNot, classes.btnYes)}
        >
          <FavoriteIcon className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Main;
