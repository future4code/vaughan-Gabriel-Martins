import React from "react";
import TextField from "@material-ui/core/TextField";
import { StyledDiv, StyledDivButton } from "./style";
import { Button, Typography } from "@material-ui/core";

const LoginPage = () => {
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
          <Button variant='contained'>Voltar</Button>
          <Button variant='contained'>Entrar</Button>
        </StyledDivButton>
      </StyledDiv>
    </form>
  );
};

export default LoginPage;
