import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { Bobydiv } from '../ListTripsPage/Style';

import Cards from './Card';
import {CardStyledDiv, StyledDivButton } from  './style';



const AdminHomePage =()=> { 


  return ( 
    <Bobydiv>

    <CardStyledDiv>
     <Typography
     align="center"
     variant="h4"
     component="h1"
     >Painel Administrativo</Typography>
     <StyledDivButton> 
       <Button
       variant="contained"
       >Voltar</Button>
       <Button
       variant="contained"
       >Criar Viagem</Button>
       <Button
       variant="contained"
       >Logout</Button>
     </StyledDivButton>
     <Cards titulo="teste" />
     <Cards titulo="teste" />
     <Cards titulo="teste" />
     <Cards titulo="teste" />
  
    </CardStyledDiv>
       </Bobydiv>
  )
}

export default AdminHomePage;