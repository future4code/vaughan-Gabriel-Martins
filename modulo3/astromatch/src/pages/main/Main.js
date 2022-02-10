import React, { useState, useEffect } from "react";
import Axios from "axios";

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
import { red, green , blueGrey } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import clsx from "clsx";
import styled from "styled-components";

import { UrlBase } from "../../constants/constants";
import {getProfileToChooseApi , choosePerfApi} from '../../services/apiendpoints';

import imagem from "../../assets/img/imagem.jpeg";

const DivWords = styled.div`
  position: absolute;
  color: white;
  top: 380px;
  left: 0px;
  width: 88%;
  padding: 8px 8px;
  margin: 0 5.9%;
  height: 120px;
  box-sizing: border-box;
  background: rgba(50, 50, 50, 0.837);
`;

const useStyles = makeStyles({
  mainContainer: {
    position: "relative",
    maxWidth: "400px",
    // height: 600,
    margin: "20% auto",
    boxShadow: "0 0 1px 1px  black ",
    background: blueGrey[50],
  },
  cardHeaderClass: {
    borderBottom: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    background: red[500],
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

const Main = (props) => {
  const classes = useStyles();
  const [liked, setLiked] = useState("");
  const [pushed, setPushed] = useState(false);
  const [profile, setProfile] = useState("");
 

  const onClickHandlerLiked = (id) => {
    setPushed(!pushed)
    // setLiked(true);
    choosePerfApi(id);
  };
  const onClickHandlerNotLiked = (id) => {
    setPushed(!pushed)
    // setLiked(false);
  };

  const saveProfile =(data) =>setProfile(data)


  useEffect(() => {
    getProfileToChooseApi(setProfile);
  }, [pushed]);


  return (
    <Card className={classes.mainContainer} align='center'>
      <CardHeader
        className={classes.cardHeaderClass}
        title='astromatch'
        action={
          <>
            <IconButton aria-label='matches'
              onClick={()=>props.changingePage()}
            >
              <MoreVertIcon />
            </IconButton>
          </>
        }
      />

      <CardMedia
        className={classes.media}
        // image="imagem"
        image={profile.photo || imagem}
        title='Profile Photo'
      />
      <DivWords>
        <Typography variant='h6'>
          {profile.name} &nbsp;
          {profile.age}
        </Typography>
        <Typography>{profile.bio}</Typography>
      </DivWords>

      <CardActions className={classes.cardBtn}>
        <IconButton
          onClick={() => onClickHandlerNotLiked(profile.id)}
          className={clsx(classes.BtnLikeNot, classes.btnNo)}
        >
          <CloseOutlinedIcon className={classes.icon} />
        </IconButton>
        <IconButton
          onClick={() => onClickHandlerLiked(profile.id)}
          className={clsx(classes.BtnLikeNot, classes.btnYes)}
        >
          <FavoriteIcon className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Main;
