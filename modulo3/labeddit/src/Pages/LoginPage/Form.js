import React ,{useState} from "react";
import { Button, Card, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { goToFeed } from "../../routers/coordenates";
import PostLoginSignup from "../../Services/PostLoginSignup";
import { CircularProgress } from "@material-ui/core";



const Form = () => {
    const navigate = useNavigate();
    const initialValues = { email: "", password:"", };
    const { form, onChange, clear } = useForm(initialValues);
    const[isloadding, setIsloadding]= useState(false);


    const saveData = (data) =>{ 
      console.log(" loginPage - Data", data)
     
      
  } 
  
    const onSubmitHandler =(e)=> { 
      e.preventDefault();
      PostLoginSignup(form , saveData, '/login', navigate, setIsloadding)

      
    }

  return (
    <form onSubmit={onSubmitHandler}>
      <Card>

      <TextField
        name='email'
        placeholder="Email"
        value={form.email}
        variant="outlined"
        onChange={onChange}
        type="email"
        required
        fullWidth
        />
        </Card>
        <Card>

      <TextField
        name='password'
        type="password"
        variant="outlined"
        placeholder='Senha'
        value={form.password}
        onChange={onChange}
        required
        fullWidth
        />
        </Card>
        <Card>
      <Button 
        variant="text"
        color="primary"
        variant="contained"
        fullWidth
        type="submit">
       { isloadding ?  
        <CircularProgress 
        color="secondary"
        size={24}
        /> :
        "Entrar"}
      </Button>
        </Card>
    </form>
  );
};


export default Form;