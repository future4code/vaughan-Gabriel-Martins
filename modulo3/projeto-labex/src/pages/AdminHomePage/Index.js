import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button, ListItem, Typography } from "@material-ui/core";
import Cards from "./Card";
import useProtected from "../../Hooks/useProtected";
import GetTrips from "../../Service/GetTrips";
import { Card, CardHeader, IconButton, CardActions } from "@material-ui/core";
import { CardStyledDiv, StyledDivButton } from "./style";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteTrip from "../../Service/DeleteTrip";
import { Bobydiv } from "../ListTripsPage/Style";


const AdminHomePage = () => {
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();
  useProtected();

  const saveData = (data) => {
    setTrips(data);
  };
  
  const deleteTrip = (id , e) => { 
   e.stopPropagation() 
   DeleteTrip(id)
 }
  useEffect(() => {
    GetTrips(saveData)
  }, []);

  const handlerClickCreate = () => {
    navigate("/admin/trips/create");
  };

  const onClickHandlerLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const goToPage =(id)=> { 
    navigate(`/admin/trips/${id}`)
    console.log(id)
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
          <Button variant='contained' onClick={handlerClickCreate}>
            Criar Viagem
          </Button>
          <Button onClick={onClickHandlerLogout} variant='contained'>
            Logout
          </Button>
        </StyledDivButton>
        {console.log(trips)}
        {trips.map((item) => (
          <Card onClick={()=>goToPage(item.id)} key={item.id}>
            <p > {item.name}</p>
            <IconButton
              aria-label='Viagem'
              onClick={(e) => deleteTrip( item.id , e  )}
            >
              <DeleteIcon />
            </IconButton>
          </Card>
        ))}
      </CardStyledDiv>
    </Bobydiv>
  );
};

export default AdminHomePage;
