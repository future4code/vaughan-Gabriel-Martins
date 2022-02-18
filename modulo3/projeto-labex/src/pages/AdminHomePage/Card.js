import React, { Children } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {Card, CardHeader,IconButton ,CardActions} from '@material-ui/core';




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