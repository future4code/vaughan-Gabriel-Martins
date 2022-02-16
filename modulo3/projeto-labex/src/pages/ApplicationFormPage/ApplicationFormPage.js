import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { MainContainer } from "./Style";
import { Bobydiv, StyledContainerButtons } from "../ListTripsPage/Style";
import { Button, Typography } from "@material-ui/core";
import {DataCountries } from "./Data";




const ApplicationFormPage = () => {

  console.log(DataCountries)
  return (
    <Bobydiv> 
      <MainContainer>
        <Typography
        color="textSecondary"
        align="center"
        variant="h3" 
        component="h1"
        gutterBottom
        >
            Inscreva-se para uma viagem
        </Typography>
        <form noValidate autoComplete='off'>
        <TextField
            id='standard-select-currency-native'
            fullWidth
            variant='outlined'
            select
            required
            label='Escolha uma viagem'
            //   value=""
            //   onChange=
            SelectProps={{
              native: true,
            }}
          >
            {['eu', 'vc'].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))} 
          </TextField>
          <TextField
            fullWidth
            required
            id='filled-required'
            label='Nome'
            variant='outlined'
            margin="normal"
            
            
            />
          <TextField
            margin="normal"
            fullWidth
            required
            id='filled-required'
            label='Idade'
            type='number'
            variant='outlined'
            />
          <TextField
            margin="normal"
            fullWidth
            required
            id='filled-required'
            label='Profissão'
            variant='outlined'
            />
          <TextField
            margin="normal"
            fullWidth
            required
            id='filled-required'
            label='Texto de Candidatura'
            variant='outlined'
            />
          <TextField
            margin="normal"
            fullWidth
            variant='outlined'
            select
            required
            label='Escolha um Pais'
            value=" "
            //   onChange=
            SelectProps={{
              native: true,
            }}
          >
            {DataCountries.map((option) => (
            <option  key={option.ordem} 
            value={option.nome}>
              {option.nome}
            </option>
          ))}
          </TextField>
        </form>
        <StyledContainerButtons>
        <Button
        variant='contained'
        >Voltar
        </Button>
        <Button
        variant='contained'
        >Enviar
        </Button>
        </StyledContainerButtons>
      </MainContainer>
    </Bobydiv>
  );
};

export default ApplicationFormPage;
