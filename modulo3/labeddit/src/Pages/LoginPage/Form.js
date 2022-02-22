import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { goToFeed } from "../../routers/coordenates";


const Form = () => {
    const navigate = useNavigate();
    const initialValues = { email: "", password:"", };
    const { form, onChange, clear } = useForm(initialValues);
  
    const onSubmitHandler =(e)=> { 
      e.preventDefault();
    }

  return (
    <form onSubmit={onSubmitHandler}>
      <TextField
        name='email'
        value={form.email}
        onChange={onChange}
        fullWidth
      />
      <TextField
        name='password'
        value={form.password}
        onChange={onChange}
        fullWidth
      />
      <Button fullWidth onClick={() => goToFeed(navigate)}>
        Entrar
      </Button>
    </form>
  );
};


export default Form;