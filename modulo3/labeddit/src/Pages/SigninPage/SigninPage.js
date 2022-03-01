import { Card } from '@material-ui/core';
import React, { useState } from 'react';

import Form from './Form';
import FormSignin from './Form';
import { StyledBox } from "./Style";



const SigninPage =()=>  { 
    const initialValues ={ name:"", password:"", email:""}

  

    const onSubmitHandler = (e)=> { 
        e.preventDefault(); 
    }

    return ( 
      <StyledBox>
      <FormSignin/>
      </StyledBox>
    )
}

export default SigninPage 
