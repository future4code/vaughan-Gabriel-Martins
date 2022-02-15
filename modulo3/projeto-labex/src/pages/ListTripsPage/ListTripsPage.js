import React , { useState , useEffect} from "react";
import styled from "styled-components";
import axios from "axios";

import { StyledContainer, StyledContainerButtons , Bobydiv } from "./Style";

import { Button, CardContent, Typography } from "@material-ui/core";
import SimpleCard from "./SimpleCard";
import GetTrips from "../../assets/GetTrips";

const ListTripsPage = () => {
    const [list,setList ]  = useState([]);
    
    useEffect(()=>  {GetTrips(saveData)}, [ ])
    const saveData = (data)=> { 
        setList(data)
        console.log(data)
    }

    const listRender = list.map(item => { 
       return  <StyledContainer key={item.id}>
        <SimpleCard
          name={item.name}
          description={item.description}
          duration={item.durationInDays} 
         planet={item.planet}
       date={item.date}
       />
      </StyledContainer>
    })
    
    
    return (
        <Bobydiv>
      <StyledContainerButtons>
        <Button
          variant='contained'
        >
          Voltar
        </Button>

        <Button variant='contained'>Inscrever-se</Button>
      
      </StyledContainerButtons>
      <StyledContainer>
      <Typography variant="h3"  component="h1"
       color="textSecondary"  >Lista de Viagens</Typography>
      </StyledContainer>
      {listRender}
    
    </Bobydiv>
  );
};

export default ListTripsPage;
