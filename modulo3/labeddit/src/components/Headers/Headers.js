import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



 const Headers = () => {


  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="secondary">Login</Button>
          <Button color="">Signin</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Headers;