import React, { Children } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components';
import DeleteIcon from "@material-ui/icons/Delete";
import { Card, CardHeader, IconButton, CardActions } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 600,
//     margin: 100,
//   },
// }));

 const CardDiv = styled.div`
   max-width: 400px;
   width: 50vw;
   height: 100px;
   color:black;

   margin: 10px;
 `

const Cards = (props) => {
  // const classes = useStyles();

  return (<CardDiv> </CardDiv> )
};

export default Cards;
