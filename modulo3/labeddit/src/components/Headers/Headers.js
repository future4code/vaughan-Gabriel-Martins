import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {HeaderApp, ButtonStyled} from './style';



 const Headers = () => {


  return (
  
      <AppBar position="static">
        <HeaderApp>
          <Button
          size="large"
           color="secondary">Login</Button>
          <Button 
          size="large">
            Signin</Button>
        </HeaderApp>
      </AppBar>
 
  );
}

export default Headers;