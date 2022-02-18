import React, { Children } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { Card, CardHeader, IconButton, CardActions } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: "1rem",
  },
}));

const Cards = (props) => {
  const classes = useStyles();

  return <Card className={classes.root}>{props.Children}</Card>;
};

export default Cards;
