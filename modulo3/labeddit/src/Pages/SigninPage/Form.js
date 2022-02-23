import React from "react";
import { Button, TextField } from "@material-ui/core";
import PostLoginSignup from "../../Services/PostLoginSignup";

import useForm from "../../Hooks/useForm";

const FormSignin = () => {
  const initialValues = { username: "", password: "", email: "" };

  const { onChange, form, clear } = useForm(initialValues);

  const saveData = (data) =>{ 
      console.log("Form-Data", data)
      localStorage.setItem("token", data.data.token)
      
  } 


  const onSubmitHandler = (e) => {
    e.preventDefault();
    PostLoginSignup(form, saveData  ,"signup");
    clear();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <TextField
        name='username'
        // required
        value={form.username}
        onChange={onChange}
        fullWidth
      />
      <TextField
        // required
        // type="email"
        name='email'
        value={form.email}
        onChange={onChange}
        fullWidth
      />
      <TextField
        // required
        name='password'
        value={form.password}
        onChange={onChange}
        fullWidth
      />
      <Button fullWidth type='submit' onClick={() => console.log("teste")}>
        Cadastrar
      </Button>
    </form>
  );
};

export default FormSignin;
