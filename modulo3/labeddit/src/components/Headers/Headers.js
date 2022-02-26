import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { HeaderApp, ButtonStyled } from "./style";
import { goToFeed, goToLogin } from "../../routers/coordenates";
import { isLogout } from "../isLogout";

const Headers = () => {
  const navigate = useNavigate();
  //  isLogout();

  const logout = () => {
    localStorage.removeItem(localStorage.removeItem("token"));
    goToLogin(navigate);
  };
  const logoin = () => {
    goToLogin(navigate);
  };

  return (
    <AppBar position='static'>
      <HeaderApp>
        <Button
        variant="text"
          onClick={() => goToFeed(navigate)}
        >
          <Typography variant='h4' color='secondary'>
            Labeddit
          </Typography>
        </Button>
        {localStorage.getItem("token") ? (
          <Button
            // variant="contained"
            onClick={logout}
            size='large'
          >
            {" "}
            <Typography variant='h5' >
              logout
            </Typography>
          </Button>
        ) : (
          <Button
            // variant="contained"
            onClick={logoin}
            size='large'
          >
            {" "}
            <Typography variant='h5' >
             Login
            </Typography>
          </Button>
        )}
      </HeaderApp>
    </AppBar>
  );
};

export default Headers;
