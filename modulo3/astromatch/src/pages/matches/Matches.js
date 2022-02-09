import React from "react";
import {
  Card,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { red, green, blue } from "@material-ui/core/colors";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import clsx from "clsx";
import styled from "styled-components";

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
    // justifyContent: 'center',
    alignItems: "center",
    padding: 0,
    background: green[50],
  },
  return: {
    // border: "1px solid black",
    margin: "1rem 5rem 1rem 1rem",
    height: 50,
    width: 50,
    background: blue[50],
    color: blue[700],
    "&:hover":{ 
      background: blue[900],
    }
  },
  icon:{ 
    width: 40,
    height:40,
    padding: 0,
    margin:0,
  }
});

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.mainContainer} align='center'>
      <CardContent className={classes.cardHeaderClass}>
        <>
          <IconButton aria-label='Go back' className={classes.return}>
            <ArrowBackOutlinedIcon className={classes.icon} />
          </IconButton>
        </>
        <Typography align='center'>astromatch </Typography>
      </CardContent>

      <CardContent >nada</CardContent>
    </Card>
  );
};
export default Main;
