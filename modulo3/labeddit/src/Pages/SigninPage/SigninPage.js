import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import useForm from '../../Hooks/useForm';
import Form from './Form';
import FormSignin from './Form';



const SigninPage =()=>  { 
    const initialValues ={ name:"", password:"", email:""}

    const{ onChange, form , clear} = useForm(initialValues)

    const onSubmitHandler = (e)=> { 
        e.preventDefault(); 
    }

    return ( 
      <FormSignin/>
    )
}

export default SigninPage 
