import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader,IconButton ,CardActions} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 600,
      margin: '1rem',
    }
})) 


const Cards =  (props) =>  {

const classes = useStyles();

return ( 

    <Card className={classes.root}>

        <CardHeader
      
        action={
          <IconButton aria-label="Viagem">
           <DeleteIcon/>
          </IconButton>
        }
        title={props.titulo}
       
      />

    </Card>
    )


} 

export default Cards;