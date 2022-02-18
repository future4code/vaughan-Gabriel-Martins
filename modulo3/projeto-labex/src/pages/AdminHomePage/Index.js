import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Button, Typography } from "@material-ui/core";
import Cards from "./Card";
import useProtected from "../../Hooks/useProtected";
import GetTrips from "../../Hooks/GetTrips";
import { CardStyledDiv, StyledDivButton } from "./style";
import { Bobydiv } from "../ListTripsPage/Style";

const AdminHomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    useProtected();
  }, []);

  const handlerClickCreate = () => {
    navigate("/admin/trips/create");
  };

  const onClickHandlerLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

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
          <Button variant='contained' onClick={handlerClickCreate}>
            Criar Viagem
          </Button>
          <Button onClick={onClickHandlerLogout} variant='contained'>
            Logout
          </Button>
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
