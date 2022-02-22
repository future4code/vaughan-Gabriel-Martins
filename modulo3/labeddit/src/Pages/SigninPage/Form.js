import React from "react";
import { Button, TextField } from '@material-ui/core';

import useForm from '../../Hooks/useForm';

const FormSignin =() => { 

    const initialValues ={ name:"", password:"", email:""}
    
    const{ onChange, form , clear} = useForm(initialValues)
    
    const onSubmitHandler = (e)=> { 
        e.preventDefault(); 
    }
    
    return(
    <form onSubmit={onSubmitHandler}>
 <TextField
 name="name"
 required
 value={form.name}
 onChange={onChange}
 fullWidth
 />
 <TextField
 required
 name="email"
 value={form.email}
 onChange={onChange}
 fullWidth
 />
 <TextField
 required
 name="password"
 value={form.password}
 onChange={onChange}
 fullWidth
 />
 <Button
 fullWidth
 type="Submit"
 onClick={()=> console.log("teste")}
 >Cadastrar</Button>
</form>)
}

export default FormSignin;