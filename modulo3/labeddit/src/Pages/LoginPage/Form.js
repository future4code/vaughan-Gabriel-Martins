import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { goToFeed } from "../../routers/coordenates";
import PostLoginSignup from "../../Services/PostLoginSignup";


const Form = () => {
    const navigate = useNavigate();
    const initialValues = { email: "", password:"", };
    const { form, onChange, clear } = useForm(initialValues);


    const saveData = (data) =>{ 
      console.log(" loginPage - Data", data)
     
      
  } 
  
    const onSubmitHandler =(e)=> { 
      e.preventDefault();
      PostLoginSignup(form , saveData, '/login', navigate)
      
    }

  return (
    <form onSubmit={onSubmitHandler}>
      <TextField
        name='email'
        value={form.email}
        onChange={onChange}
        required
        fullWidth
      />
      <TextField
        name='password'
        value={form.password}
        onChange={onChange}
        required
        fullWidth
      />
      <Button 
      fullWidth
      type="submit">
        Entrar
      </Button>
    </form>
  );
};


export default Form;