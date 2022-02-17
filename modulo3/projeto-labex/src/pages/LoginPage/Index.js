import React, {useState} from "react";

import PostSingup from "../../Hooks/PostSingup";

import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router";
import { StyledDiv, StyledDivButton } from "./style";
import { Button, Typography } from "@material-ui/core";

const LoginPage = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [dataPostSignup, setDataPostSignup]=useState('');
  const [dataPostSignupErr, setDataPostSignupErr]=useState('');


  const navigate = useNavigate();

  function HandlerClickVoltar() {
    navigate("/");
    setDataPostSignupErr('');

  }

  const handlerSubmitForm =(e) =>{ 
    e.preventDefault();
    console.log(email, password);
    setDataPostSignupErr('');

    
    PostSingup(email, password, setDataPostSignup, setDataPostSignupErr )


    // call login if 
    // navigate("/");
    // navigate("/admin/trips/list");
  }


  return (
    <form 
    noValidate 
    autoComplete="off"
    onSubmit={handlerSubmitForm}
    >
      <StyledDiv>
        <Typography 
        align='center'
        //  color="primaryText" 
         variant='h4'>
          Login
        </Typography>
       
        <TextField
          fullWidth
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          margin='normal'
          label='E-mail'
          variant='outlined'
          />
        <TextField
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          fullWidth
          label='Senha'
          required
          margin='normal'
          variant='outlined'
        />
          {dataPostSignupErr && <Typography 
          color="error"
          >{dataPostSignupErr.data.message}</Typography>}
        <StyledDivButton>
          <Button
          onClick={HandlerClickVoltar}
          variant='contained'>Voltar</Button>
          <Button 
          type="submit"
          variant='contained'>Entrar</Button>
        </StyledDivButton>
      </StyledDiv>
    </form>
  );
};

export default LoginPage;
