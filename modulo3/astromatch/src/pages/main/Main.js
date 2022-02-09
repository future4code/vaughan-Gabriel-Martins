import React from 'react';
import {Card,CardContent,CardHeader, CardMedia, IconButton, makeStyles ,Typography} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles({ 
    mainContainer: { 
       maxWidth: '400px',
       margin: '20% auto',
   },
})



const Main = () => { 
    const classes = useStyles()
    return(
        <Card 
            className={classes.mainContainer}
            align="center"
        >
            <CardHeader
              action={
                <IconButton aria-label="matches">
                  <MoreVertIcon />
                </IconButton>
              }
            />

            <CardMedia
              className={classes.media}
              image={unsplash.photos.getPhoto("pFqrYbhIAXs")}
              title="Paella dish"
              
            />
            <CardContent>
                <Typography>
                    Aliquip sunt enim ullamco Lorem nulla est est sunt est enim aliquip.
                </Typography>
            </CardContent>
        </Card>
    )
}
export default Main;