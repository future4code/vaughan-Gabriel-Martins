import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

import { goToSignin} from "../../routers/coordenates";
import Form from "./Form";

const LoginPage = () => {
  const navigate = useNavigate();
  
    
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