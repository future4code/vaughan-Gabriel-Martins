import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useNavigate } from "react-router";
import { MainContainer } from "./Style";
import PostApllyToTrip from "../../Hooks/PostApllytoTrip";
import { Bobydiv, StyledContainerButtons } from "../ListTripsPage/Style";
import { Button, Typography } from "@material-ui/core";
import { DataCountries } from "./Data";
import useForm from "../../Hooks/useForm";

const ApplicationFormPage = () => {
   const initialState = (
    {selectCountry:"" , selectViagem:"", 
    nome:"", idade:"", textoCandidatura:"",
    profissao:"" });
  
    const { form, onChange }=  useForm(initialState)


  const navigate = useNavigate();

  // URL return
  const handlerClickVoltar = () => {
    navigate("/trips/list");
  };

  // Clicks - Subumit -  Onchanges Handlers local using arrow functions
  const handlerSubmitEnviar = (e) => {
    e.preventDefault();

    // Id é a viagem escolhida como pegar id trips/list
    //
    //!! PostApllyToTrip(id, form)

    // Call The right function - API

    // Go back to trips list
    navigate("/trips/list");
  };



  return (
    <Bobydiv>
      <MainContainer>
        <Typography
          color='textSecondary'
          align='center'
          variant='h4'
          component='h1'
          gutterBottom
        >
          Inscreva-se para uma viagem
        </Typography>
        <form noValidate autoComplete='off' onSubmit={handlerSubmitEnviar}>
          <TextField
            name="selectViagem"
            value={form.selectViagem}
            onChange={onChange}
            fullWidth
            variant='outlined'
            select
            required
            label='Escolha uma viagem'
            SelectProps={{
              native: true,
            }}
          >
            {["Escolha uma viagem", "eu", "vc"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
          <TextField
            name='nome'
            value={form.nome}
            onChange={onChange}
            fullWidth
            required
            label='Nome'
            variant='outlined'
            margin='normal'
          />
          <TextField
            name='idade'
            value={form.idade}
            onChange={onChange}
            margin='normal'
            fullWidth
            required
            label='Idade'
            type='number'
            variant='outlined'
          />
          <TextField
            name="profissao"
            value={form.profissao}
            onChange={onChange}
            margin='normal'
            fullWidth
            required
            label='Profissão'
            variant='outlined'
          />
          <TextField
            name='textoCandidatura'
            value={form.textoCandidatura}
            onChange={onChange}
            margin='normal'
            fullWidth
            required
            label='Texto de Candidatura'
            variant='outlined'
          />
          <TextField
            name='selectCountry'
            value={form.selectCountry}
            onChange={onChange}
            margin='normal'
            fullWidth
            variant='outlined'
            select
            required
            label='Escolha um Pais'
            SelectProps={{
              native: true,
            }}
          >
            {DataCountries.map((option) => (
              <option key={option.ordem} value={option.nome}>
                {option.nome}
              </option>
            ))}
          </TextField>
          <StyledContainerButtons>
            <Button onClick={handlerClickVoltar} variant='contained'>
              Voltar
            </Button>
            <Button type='submit' variant='contained'>
              Enviar
            </Button>
          </StyledContainerButtons>
        </form>
      </MainContainer>
    </Bobydiv>
  );
};

export default ApplicationFormPage;
