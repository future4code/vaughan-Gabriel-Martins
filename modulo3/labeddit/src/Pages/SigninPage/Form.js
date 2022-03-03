import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CircularProgress, TextField } from "@material-ui/core";
import PostLoginSignup from "../../Services/PostLoginSignup";

import useForm from "../../Hooks/useForm";

const FormSignin = () => {
  const navigate = useNavigate();
  const initialValues = { username: "", password: "", email: "" };
  const[isloading, setIsloading]= useState(false);

  const { onChange, form, clear } = useForm(initialValues);

  const saveData = (data) =>{ 
      console.log("Form-Data", data)
      localStorage.setItem("token", data.data.token)
  } 

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    PostLoginSignup(form, saveData  ,"/signup" ,  navigate , setIsloading);
    clear();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Card>
      <TextField
        name='username'
        required
        value={form.username}
        onChange={onChange}
        fullWidth
        variant="outlined"
        placeholder="Nome do usuario"
        />
        </Card>
        <Card>
      <TextField
        required
        type="email"
        name='email'
        value={form.email}
        variant="outlined"
        onChange={onChange}
        fullWidth
        placeholder="Email"
        />
        </Card>
        <Card>
      <TextField
        required
        type="password"
        name='password'
        value={form.password}
        onChange={onChange}
        fullWidth
        variant="outlined"
        placeholder="Senha caracteres 8-10 "
      />
      </Card>
      <Button
       fullWidth
       variant="contained"
       type='submit' 
       color="primary"
       type="submit">
        {isloading ? <CircularProgress size={24} color={"inherit"} />   : "Cadastrar"}
      </Button>
    </form>
  );
};

export default FormSignin;
