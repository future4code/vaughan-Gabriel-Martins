import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    width: "50vw",
    maxWidth:650,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
});

export const Styledspan = styled.span`
  color: black;
`;

export default function SimpleCard({
  name,
  description,
  duration,
  planet,
  date,
}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          variant='h6'
          component='h2'
          component='h3'
          color='textSecondary'
          gutterBottom
        >
          Nome: <Styledspan>{name}</Styledspan>
        </Typography>
        <Typography
          variant='h6'
          component='h2'
          color='textSecondary'
          gutterBottom
        >
          Descrição: <Styledspan>{description}</Styledspan>
        </Typography>
        <Typography
          variant='h6'
          component='h2'
          color='textSecondary'
          gutterBottom
        >
          Planeta: <Styledspan>{planet}</Styledspan>
        </Typography>
        <Typography
          variant='h6'
          component='h2'
          color='textSecondary'
          gutterBottom
        >
          Duração: <Styledspan>{duration} dias</Styledspan> 
        </Typography>
        <Typography
          variant='h6'
          component='h2'
          color='textSecondary'
          gutterBottom
        >
          Data: <Styledspan>{date}</Styledspan>
        </Typography>
      </CardContent>
    </Card>
  );
}
