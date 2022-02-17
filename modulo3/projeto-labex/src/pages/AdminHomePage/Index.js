import { Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router";
import React from "react";
import { Bobydiv } from "../ListTripsPage/Style";

import Cards from "./Card";
import { CardStyledDiv, StyledDivButton } from "./style";

const AdminHomePage = () => {
  const navigate = useNavigate();

  const handlerClickLogout  =()=> { 
    navigate("/login");
  }
   
  const handlerClickCreate  =()=> { 
    navigate("/admin/trips/create");
  }
   

  return (
    <Bobydiv>
      <CardStyledDiv>
        <Typography align='center' variant='h4' component='h1'>
          Painel Administrativo
        </Typography>
        <StyledDivButton>
          <Button onClick={() => navigate("/")} variant='contained'>
            Voltar
          </Button>
          <Button
            variant='contained'
            onClick={handlerClickCreate}
          >
            Criar Viagem
          </Button>
          <Button 
          onClick={handlerClickLogout}
          variant='contained'>Logout</Button>
        </StyledDivButton>
        <Cards titulo='teste' />
        <Cards titulo='teste' />
        <Cards titulo='teste' />
        <Cards titulo='teste' />
      </CardStyledDiv>
    </Bobydiv>
  );
};

export default AdminHomePage;
