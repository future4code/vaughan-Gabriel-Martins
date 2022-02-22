import React, { useState } from 'react';

import Form from './Form';
import FormSignin from './Form';



const SigninPage =()=>  { 
    const initialValues ={ name:"", password:"", email:""}

  

    const onSubmitHandler = (e)=> { 
        e.preventDefault(); 
    }

    return ( 
      <FormSignin/>
    )
}

export default SigninPage 
