import React from "react";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router";
import { StyledDiv, StyledDivButton } from "./style";
import { Button, Typography } from "@material-ui/core";

const LoginPage = () => {
  const navigate = useNavigate();

  const HandlerClickVoltar =() =>{ 
     navigate("/");
  }

  const HandlerClickEntrar =() =>{ 
     navigate("/");
  }

  return (
    <form noValidate >
      <StyledDiv>
        <Typography 
        align='center'
         color="primaryText" variant='h4'>
          Login
        </Typography>
        <TextField
          fullWidth
          required
          margin='normal'
          label='E-mail'
          variant='outlined'
        />
        <TextField
          fullWidth
          label='Senha'
          required
          margin='normal'
          variant='outlined'
        />
        <StyledDivButton>
          <Button
          onClick={HandlerClickVoltar}
          variant='contained'>Voltar</Button>
          <Button 
          onClick={HandlerClickEntrar}
          variant='contained'>Entrar</Button>
        </StyledDivButton>
      </StyledDiv>
    </form>
  );
};

export default LoginPage;
