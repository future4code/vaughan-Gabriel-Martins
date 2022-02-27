import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import useLogedPage from "../../Hooks/useLogedPage";

import { goToSignin} from "../../routers/coordenates";
import Form from "./Form";
import { StyledBox } from "./Style";

const LoginPage = () => {
  const navigate = useNavigate();
  useLogedPage()
   
 
  return (
      <StyledBox>
      <Form/>
      <Button
      
      variant="contained"
      fullWidth
      onClick={()=>goToSignin(navigate)}
      >Cadastrar</Button>
      </StyledBox>
  );
};

export default LoginPage;
