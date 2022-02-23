import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import PostLogin from "../../Services/PostLogin";
import PostSignup from "../../Services/PostSignup";

import { goToSignin} from "../../routers/coordenates";
import Form from "./Form";

const LoginPage = () => {
  const navigate = useNavigate();
   
  useEffect(()=>{  PostSignup()
    
  },[])
  
  
  return (
      <>
      <Form/>
      <Button
      fullWidth
      onClick={()=>goToSignin(navigate)}
      >Cadastrar</Button>
      </>
  );
};

export default LoginPage;
