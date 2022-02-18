import React, {useState, useEffect} from "react";

import PostSingup from "../../Hooks/PostSingup";

import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router";
import { StyledDiv, StyledDivButton } from "./style";
import { Button, Typography } from "@material-ui/core";
import useForm from '../../Hooks/useForm';
import PostLogin from "../../Hooks/PostLogin";


const LoginPage = () => {
  const initialState = {email:'' , password:''}
  const {form, onChange} = useForm(initialState)
  const [dataApi, setDataApi]=useState(false);


  const navigate = useNavigate();

  function HandlerClickVoltar() {
    navigate("/");
  }
  
  const respondeApiPostlogin =(data)=> { 
    localStorage.setItem("token", data.data.token)
    setDataApi(data.data.success)
    navigate("/admin/trips/list")

  }
  // useEffect(()=> { 
  //    const teste = localStorage.getItem("token")
  //    console.log('teste', teste);

  //  },[])
   
  const handlerSubmitForm =(e) =>{ 
    e.preventDefault();
    PostLogin(form, respondeApiPostlogin)
   
  }


  return (
    <form 
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
          name="email"
          fullWidth
          required
          value={form.email}
          onChange={onChange}
          margin='normal'
          label='E-mail'
          variant='outlined'
          />
        <TextField
          name="password"
          value={form.password}
          onChange={onChange}
          fullWidth
          type="password"
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
          type="submit"
          variant='contained'>Entrar</Button>
        </StyledDivButton>
      </StyledDiv>
    </form>
  );
};

export default LoginPage;
